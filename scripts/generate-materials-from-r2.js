/**
 * Script to generate materials.json from R2 texture files
 * 
 * Usage:
 * 1. Set environment variables:
 *    - CLOUDFLARE_R2_ACCESS_KEY_ID
 *    - CLOUDFLARE_R2_SECRET_ACCESS_KEY
 *    - CLOUDFLARE_R2_BUCKET_NAME=threejs-assets
 *    - CLOUDFLARE_R2_ENDPOINT=https://421f31ce5d60990daad73b9c9448d1c8.r2.cloudflarestorage.com
 *    - R2_PUBLIC_URL=https://pub-42d9986d97a0490598cb89136641b713.r2.dev
 * 2. Run: node scripts/generate-materials-from-r2.js
 */

import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const R2_ACCESS_KEY_ID = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.CLOUDFLARE_R2_BUCKET_NAME || 'threejs-assets';
const R2_ENDPOINT = process.env.CLOUDFLARE_R2_ENDPOINT || 'https://421f31ce5d60990daad73b9c9448d1c8.r2.cloudflarestorage.com';
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || 'https://pub-42d9986d97a0490598cb89136641b713.r2.dev';

if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
  console.error('Error: CLOUDFLARE_R2_ACCESS_KEY_ID and CLOUDFLARE_R2_SECRET_ACCESS_KEY must be set');
  process.exit(1);
}

const s3Client = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

function parseMaterialFiles(files) {
  const materialMap = new Map();

  for (const file of files) {
    const fileName = file.replace(/^threejs-assets\/textures\//, '');
    
    if (!fileName.match(/\.(jpg|jpeg|png)$/i)) continue;

    const match = fileName.match(/^(.+?)_(Color|NormalGL|NormalDX|Roughness|Metallic|Displacement)\.(jpg|jpeg|png)$/i);
    
    if (!match) continue;

    const [, materialName, textureType, ext] = match;
    const cleanName = materialName.replace(/_[0-9]+[kK]$/i, '').trim();
    const materialId = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    let category = 'fabric';
    const nameLower = cleanName.toLowerCase();
    if (nameLower.includes('leather')) category = 'leather';
    else if (nameLower.includes('rubber')) category = 'rubber';
    else if (nameLower.includes('denim')) category = 'fabric';
    else if (nameLower.includes('cotton') || nameLower.includes('fabric')) category = 'fabric';
    else if (nameLower.includes('wool')) category = 'fabric';
    else if (nameLower.includes('metal')) category = 'metal';
    else if (nameLower.includes('premium') || nameLower.includes('alligator') || nameLower.includes('snake')) category = 'premium';

    if (!materialMap.has(materialId)) {
      materialMap.set(materialId, {
        name: cleanName.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        id: materialId,
        category,
      });
    }

    const material = materialMap.get(materialId);
    const fullUrl = `${R2_PUBLIC_URL}/${file}`;

    const textureTypeLower = textureType.toLowerCase();
    if (textureTypeLower === 'color') {
      material.albedo = fullUrl;
    } else if (textureTypeLower === 'normalgl' || textureTypeLower === 'normaldx') {
      material.normal = fullUrl;
    } else if (textureTypeLower === 'roughness') {
      material.roughness = fullUrl;
    } else if (textureTypeLower === 'metallic') {
      material.metallic = fullUrl;
    }
  }

  return Array.from(materialMap.values());
}

async function generateMaterials() {
  try {
    console.log(`Listing materials from R2 bucket: ${R2_BUCKET_NAME}...`);
    
    // Search for texture files in multiple possible locations
    const prefixes = [
      'threejs-assets/textures/',
      'textures/',
      '', // Root level (will filter for texture files)
    ];
    
    const files = [];
    
    // Try each prefix
    for (const prefix of prefixes) {
      let continuationToken;
      
      do {
        const command = new ListObjectsV2Command({
          Bucket: R2_BUCKET_NAME,
          Prefix: prefix,
          ContinuationToken: continuationToken,
        });

        const response = await s3Client.send(command);
        
        if (response.Contents) {
          // Filter for texture files (jpg, png) and exclude .glb, .hdr, .zip, etc.
          const textureFiles = response.Contents
            .map(obj => obj.Key)
            .filter(key => key && /\.(jpg|jpeg|png)$/i.test(key) && !key.includes('.glb') && !key.includes('.hdr') && !key.includes('.zip'))
            .filter(Boolean);
          
          files.push(...textureFiles);
        }

        continuationToken = response.NextContinuationToken;
      } while (continuationToken);
    }
    
    // Remove duplicates
    const uniqueFiles = Array.from(new Set(files));

    console.log(`Found ${uniqueFiles.length} texture files in R2`);

    const parsedMaterials = parseMaterialFiles(uniqueFiles);
    
    const materialDefinitions = parsedMaterials.map(material => ({
      id: material.id,
      name: material.name,
      category: material.category,
      description: `${material.name} material with realistic textures`,
      properties: {
        // When texture maps are present, use white color so textures show properly
        // (color acts as a multiplier/tint in Three.js)
        color: material.albedo ? '#ffffff' : '#3a3a3a',
        ...(material.albedo && { map: material.albedo }),
        ...(material.normal && { normalMap: material.normal }),
        ...(material.roughness && { roughnessMap: material.roughness }),
        ...(material.metallic && { metalnessMap: material.metallic }),
        roughness: material.category === 'rubber' ? 0.9 : material.category === 'leather' ? 0.4 : 0.7,
        metalness: 0.0,
      },
      priceModifier: material.category === 'premium' ? 50 : 0,
      premium: material.category === 'premium',
    }));

    // Read existing materials.json to preserve manual entries
    const materialsJsonPath = path.join(__dirname, '../client/data/materials.json');
    let existingMaterials = { materials: [], categories: [] };
    
    if (fs.existsSync(materialsJsonPath)) {
      const existing = JSON.parse(fs.readFileSync(materialsJsonPath, 'utf-8'));
      existingMaterials = existing;
    }

    // Merge: keep existing materials, add new ones from R2
    const existingIds = new Set(existingMaterials.materials.map(m => m.id));
    const newMaterials = materialDefinitions.filter(m => !existingIds.has(m.id));
    
    const mergedMaterials = {
      materials: [...existingMaterials.materials, ...newMaterials],
      categories: ['leather', 'fabric', 'synthetic', 'rubber', 'metal', 'premium'],
    };

    // Write to file
    fs.writeFileSync(
      materialsJsonPath,
      JSON.stringify(mergedMaterials, null, 2),
      'utf-8'
    );

    console.log(`\n✅ Generated ${materialDefinitions.length} materials from R2`);
    console.log(`   - New materials: ${newMaterials.length}`);
    console.log(`   - Existing materials preserved: ${existingMaterials.materials.length}`);
    console.log(`   - Total materials: ${mergedMaterials.materials.length}`);
    console.log(`\n📝 Updated: ${materialsJsonPath}`);
  } catch (error) {
    console.error('Error generating materials:', error);
    process.exit(1);
  }
}

generateMaterials();

