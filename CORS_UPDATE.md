# Update CORS Policy

Your current CORS policy is missing required headers. Update it in the Cloudflare Dashboard:

## Current Policy (Incomplete)
```json
[
  {
    "AllowedOrigins": [
      "http://localhost:3000"
    ],
    "AllowedMethods": [
      "GET"
    ]
  }
]
```

## Updated Policy (Complete)
Replace your CORS policy with this:

```json
[
  {
    "AllowedOrigins": [
      "http://localhost:3000"
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

## Steps to Update

1. Go to Cloudflare Dashboard → R2 → **threejs-assets** bucket
2. Click **Settings** tab
3. Scroll to **CORS Policy** section
4. Click **Edit CORS Policy**
5. Replace the entire JSON with the updated policy above
6. Click **Save**
7. Wait 10-30 seconds for changes to propagate
8. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)

## Why These Headers Are Needed

- **AllowedHeaders: ["*"]** - Allows all request headers (browsers may send various headers)
- **ExposeHeaders** - Allows the browser to read these response headers
- **HEAD method** - Some browsers use HEAD requests for preflight checks
- **MaxAgeSeconds** - Caches the CORS preflight response for 1 hour

