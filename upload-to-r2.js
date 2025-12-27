/**
 * Script to upload polar_bear.glb to Cloudflare R2
 * 
 * Usage:
 * 1. Install AWS SDK: npm install @aws-sdk/client-s3
 * 2. Set environment variables:
 *    - CLOUDFLARE_R2_ACCESS_KEY_ID
 *    - CLOUDFLARE_R2_SECRET_ACCESS_KEY
 *    - CLOUDFLARE_R2_BUCKET_NAME=threejs-assets
 *    - CLOUDFLARE_R2_ENDPOINT=https://421f31ce5d60990daad73b9c9448d1c8.r2.cloudflarestorage.com
 * 3. Run: node upload-to-r2.js
 */

const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const R2_ACCESS_KEY_ID = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.CLOUDFLARE_R2_BUCKET_NAME || 'threejs-assets';
const R2_ENDPOINT = process.env.CLOUDFLARE_R2_ENDPOINT || 'https://421f31ce5d60990daad73b9c9448d1c8.r2.cloudflarestorage.com';

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

const filePath = path.join(__dirname, 'polar_bear.glb');
const fileName = 'polar_bear.glb';

async function uploadFile() {
  try {
    console.log(`Uploading ${fileName} to R2 bucket: ${R2_BUCKET_NAME}...`);
    
    const fileContent = fs.readFileSync(filePath);
    
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ContentType: 'model/gltf-binary',
    });
    
    await s3Client.send(command);
    
    console.log(`✅ Successfully uploaded ${fileName} to R2!`);
    console.log(`Public URL: https://pub-42d9986d97a0490598cb89136641b713.r2.dev/${fileName}`);
  } catch (error) {
    console.error('Error uploading file:', error);
    process.exit(1);
  }
}

uploadFile();

