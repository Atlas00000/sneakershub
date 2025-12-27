# Fix CORS Error for Cloudflare R2

## Problem
The browser is blocking requests to your R2 bucket due to CORS policy. You need to configure CORS on your Cloudflare R2 bucket.

## Solution: Configure CORS in Cloudflare Dashboard

### Option 1: Using Cloudflare Dashboard (Recommended)

1. **Go to Cloudflare Dashboard**
   - Navigate to: https://dash.cloudflare.com/
   - Go to **R2** → **threejs-assets** bucket

2. **Configure CORS Policy**
   - Click on your bucket: **threejs-assets**
   - Go to **Settings** tab
   - Scroll down to **CORS Policy** section
   - Click **Edit CORS Policy**

3. **Add CORS Configuration**
   - Click **Add CORS Policy** or **Edit**
   - Add the following JSON configuration:

```json
[
  {
    "AllowedOrigins": [
      "http://localhost:3000",
      "https://your-production-domain.com"
    ],
    "AllowedMethods": [
      "GET",
      "HEAD"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": [
      "ETag",
      "Content-Length",
      "Content-Type"
    ],
    "MaxAgeSeconds": 3600
  }
]
```

4. **Save the Configuration**
   - Click **Save** or **Update**
   - Wait a few seconds for changes to propagate

### Option 2: Using Wrangler CLI

1. **Create a CORS configuration file** (`cors.json`):
```json
[
  {
    "AllowedOrigins": [
      "http://localhost:3000",
      "https://your-production-domain.com"
    ],
    "AllowedMethods": [
      "GET",
      "HEAD"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": [
      "ETag",
      "Content-Length",
      "Content-Type"
    ],
    "MaxAgeSeconds": 3600
  }
]
```

2. **Apply CORS policy using wrangler**:
```bash
wrangler r2 bucket cors put threejs-assets --file cors.json
```

### Option 3: Using Cloudflare API

You can also use the Cloudflare API to set CORS. See: https://developers.cloudflare.com/r2/api/s3/cors/

## Verify CORS is Working

After configuring CORS:

1. **Hard refresh your browser** (Cmd+Shift+R or Ctrl+Shift+R)
2. **Check the browser console** - the CORS error should be gone
3. **Verify the model loads** - you should see the polar bear model in the 3D scene

## Testing CORS

You can test if CORS is configured correctly by running:

```bash
curl -H "Origin: http://localhost:3000" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     -v \
     https://pub-42d9986d97a0490598cb89136641b713.r2.dev/polar_bear.glb
```

You should see `Access-Control-Allow-Origin: http://localhost:3000` in the response headers.

## Notes

- **Development**: Use `http://localhost:3000` for local development
- **Production**: Add your production domain (e.g., `https://your-app.vercel.app`) to `AllowedOrigins`
- **Wildcards**: You can use `*` for `AllowedOrigins` in development, but it's not recommended for production
- **Propagation**: CORS changes may take a few seconds to propagate

