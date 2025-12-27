/**
 * Script to list all GLB models in Cloudflare R2 bucket
 * 
 * Usage:
 * 1. Set environment variables:
 *    - CLOUDFLARE_R2_ACCESS_KEY_ID
 *    - CLOUDFLARE_R2_SECRET_ACCESS_KEY
 *    - CLOUDFLARE_R2_BUCKET_NAME=threejs-assets
 *    - CLOUDFLARE_R2_ENDPOINT=https://421f31ce5d60990daad73b9c9448d1c8.r2.cloudflarestorage.com
 * 2. Run: node scripts/list-r2-models.js
 */

const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');

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

async function listModels() {
  try {
    console.log(`\n📦 Listing GLB models in R2 bucket: ${R2_BUCKET_NAME}\n`);
    console.log('═'.repeat(80));
    
    const command = new ListObjectsV2Command({
      Bucket: R2_BUCKET_NAME,
    });
    
    const response = await s3Client.send(command);
    
    if (!response.Contents || response.Contents.length === 0) {
      console.log('No files found in the bucket.\n');
      return;
    }
    
    // Filter for GLB files
    const glbFiles = response.Contents
      .filter(item => item.Key && item.Key.toLowerCase().endsWith('.glb'))
      .sort((a, b) => (a.Key || '').localeCompare(b.Key || ''));
    
    // Filter for HDR files
    const hdrFiles = response.Contents
      .filter(item => item.Key && item.Key.toLowerCase().endsWith('.hdr'))
      .sort((a, b) => (a.Key || '').localeCompare(b.Key || ''));
    
    // Other files
    const otherFiles = response.Contents
      .filter(item => {
        const key = item.Key || '';
        return !key.toLowerCase().endsWith('.glb') && !key.toLowerCase().endsWith('.hdr');
      })
      .sort((a, b) => (a.Key || '').localeCompare(b.Key || ''));
    
    // Display GLB models
    if (glbFiles.length > 0) {
      console.log(`\n🎯 GLB Models (${glbFiles.length}):\n`);
      glbFiles.forEach((file, index) => {
        const sizeMB = ((file.Size || 0) / (1024 * 1024)).toFixed(2);
        const publicUrl = `${R2_PUBLIC_URL}/${file.Key}`;
        console.log(`${index + 1}. ${file.Key}`);
        console.log(`   Size: ${sizeMB} MB`);
        console.log(`   URL: ${publicUrl}`);
        console.log(`   Last Modified: ${file.LastModified ? new Date(file.LastModified).toLocaleString() : 'N/A'}`);
        console.log('');
      });
    } else {
      console.log('\n⚠️  No GLB models found in the bucket.\n');
    }
    
    // Display HDR files
    if (hdrFiles.length > 0) {
      console.log(`\n🖼️  HDR Backgrounds (${hdrFiles.length}):\n`);
      hdrFiles.forEach((file, index) => {
        const sizeMB = ((file.Size || 0) / (1024 * 1024)).toFixed(2);
        const publicUrl = `${R2_PUBLIC_URL}/${file.Key}`;
        console.log(`${index + 1}. ${file.Key}`);
        console.log(`   Size: ${sizeMB} MB`);
        console.log(`   URL: ${publicUrl}`);
        console.log('');
      });
    }
    
    // Display other files
    if (otherFiles.length > 0) {
      console.log(`\n📄 Other Files (${otherFiles.length}):\n`);
      otherFiles.forEach((file, index) => {
        const sizeMB = ((file.Size || 0) / (1024 * 1024)).toFixed(2);
        console.log(`${index + 1}. ${file.Key} (${sizeMB} MB)`);
      });
      console.log('');
    }
    
    console.log('═'.repeat(80));
    console.log(`\n✅ Total files: ${response.Contents.length}`);
    console.log(`   - GLB models: ${glbFiles.length}`);
    console.log(`   - HDR backgrounds: ${hdrFiles.length}`);
    console.log(`   - Other files: ${otherFiles.length}\n`);
    
    // Generate JSON output for easy copy-paste
    if (glbFiles.length > 0) {
      console.log('📋 JSON format (for easy copy-paste):\n');
      const jsonOutput = {
        models: glbFiles.map(file => ({
          name: file.Key,
          url: `${R2_PUBLIC_URL}/${file.Key}`,
          size: file.Size,
          lastModified: file.LastModified,
        })),
      };
      console.log(JSON.stringify(jsonOutput, null, 2));
      console.log('');
    }
    
  } catch (error) {
    console.error('❌ Error listing files:', error);
    if (error.message) {
      console.error('   Message:', error.message);
    }
    process.exit(1);
  }
}

listModels();


