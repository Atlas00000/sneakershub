# Upload Model to Cloudflare R2

## Option 1: Using the Upload Script (Recommended)

1. Install AWS SDK:
   ```bash
   npm install @aws-sdk/client-s3
   ```

2. Set environment variables (from your Cloudflare R2 dashboard):
   ```bash
   export CLOUDFLARE_R2_ACCESS_KEY_ID="your_access_key_id"
   export CLOUDFLARE_R2_SECRET_ACCESS_KEY="your_secret_access_key"
   export CLOUDFLARE_R2_BUCKET_NAME="threejs-assets"
   export CLOUDFLARE_R2_ENDPOINT="https://421f31ce5d60990daad73b9c9448d1c8.r2.cloudflarestorage.com"
   ```

3. Run the upload script:
   ```bash
   node upload-to-r2.js
   ```

## Option 2: Using Cloudflare Dashboard

1. Go to Cloudflare Dashboard → R2 → threejs-assets bucket
2. Click "Upload" 
3. Select `polar_bear.glb` from the project root
4. Ensure the file is uploaded to the root of the bucket (not in a subfolder)

## Option 3: Using wrangler CLI

1. Install wrangler:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate:
   ```bash
   wrangler login
   ```

3. Upload the file:
   ```bash
   wrangler r2 object put polar_bear.glb --file=./polar_bear.glb --bucket=threejs-assets
   ```

## Verify Upload

After uploading, verify the file is accessible at:
```
https://pub-42d9986d97a0490598cb89136641b713.r2.dev/polar_bear.glb
```

You should be able to download the file from this URL.

