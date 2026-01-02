# 🚀 Deployment Guide

Complete guide for deploying the Fashion Configurator application to production.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Deployment Architecture](#deployment-architecture)
- [Client Deployment (Vercel)](#client-deployment-vercel)
- [Server & Database Deployment (Railways)](#server--database-deployment-railways)
- [Environment Variables](#environment-variables)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

---

## Overview

This application consists of:
- **Client**: Next.js frontend application (deployed to Vercel)
- **Server**: Express.js API server (deployed to Railways)
- **Database**: PostgreSQL (provisioned via Railways)
- **Cache**: Redis (optional, provisioned via Railways)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ GitHub account with repository access
- ✅ Vercel account (free tier available)
- ✅ Railways account (free tier available)
- ✅ Cloudflare R2 account (for asset storage)
- ✅ Environment variables documented (see [Environment Variables](#environment-variables))

---

## Deployment Architecture

```
┌─────────────────┐
│   Vercel        │
│   (Client)      │  ← Next.js Frontend
│   Port: 3000    │
└────────┬────────┘
         │ HTTPS
         │
┌────────▼────────┐
│   Railways      │
│   (Server)      │  ← Express.js API
│   Port: 3001    │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌──▼───┐
│Postgres│ │Redis │  ← Database & Cache
└───────┘ └──────┘
```

---

## Client Deployment (Vercel)

### Step 1: Prepare Client for Deployment

1. **Verify Build Configuration**
   ```bash
   cd client
   pnpm build
   ```
   Ensure the build completes without errors.

2. **Check Environment Variables**
   - Review `client/.env.example` for required variables
   - Ensure `NEXT_PUBLIC_API_URL` points to your production server URL

### Step 2: Connect Repository to Vercel

1. **Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Choose the `client` folder as the root directory

3. **Configure Project Settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `client`
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install` (or `npm install`)

### Step 3: Set Environment Variables in Vercel

In the Vercel project settings, add the following environment variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://your-railways-app.railway.app` | Your Railways server URL |
| `NODE_ENV` | `production` | Environment mode |

**Steps:**
1. Go to Project Settings → Environment Variables
2. Add each variable for **Production**, **Preview**, and **Development** environments
3. Save and redeploy

### Step 4: Deploy

1. **Automatic Deployment**
   - Push to your main branch
   - Vercel will automatically deploy

2. **Manual Deployment**
   - Click "Deploy" in the Vercel dashboard
   - Or use Vercel CLI: `vercel --prod`

### Step 5: Verify Deployment

1. Check deployment status in Vercel dashboard
2. Visit your deployment URL (e.g., `https://your-app.vercel.app`)
3. Test the application functionality
4. Check browser console for any errors

---

## Server & Database Deployment (Railways)

### Step 1: Prepare Server for Deployment

1. **Verify Build Configuration**
   ```bash
   cd server
   pnpm build
   ```
   Ensure TypeScript compiles without errors.

2. **Check Environment Variables**
   - Review `server/.env.example` for required variables
   - Ensure all Cloudflare R2 credentials are ready

### Step 2: Create Railway Project

1. **Login to Railways**
   - Go to [railway.app](https://railway.app)
   - Sign in with your GitHub account

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select the `server` folder as the root directory

### Step 3: Add PostgreSQL Database

1. **Provision PostgreSQL**
   - In your Railway project, click "+ New"
   - Select "Database" → "Add PostgreSQL"
   - Railway will automatically provision PostgreSQL

2. **Get Database Connection String**
   - Click on the PostgreSQL service
   - Copy the `DATABASE_URL` connection string
   - This will be automatically available as an environment variable

### Step 4: Add Redis (Optional)

1. **Provision Redis**
   - In your Railway project, click "+ New"
   - Select "Database" → "Add Redis"
   - Railway will automatically provision Redis

2. **Get Redis Connection String**
   - Click on the Redis service
   - Copy the `REDIS_URL` connection string
   - This will be automatically available as an environment variable

### Step 5: Configure Server Service

1. **Set Build and Start Commands**
   - Go to your server service settings
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Root Directory**: `server` (if not auto-detected)

2. **Set Environment Variables**

   Add the following environment variables in Railway:

   | Variable | Value | Description |
   |----------|-------|-------------|
   | `PORT` | `3001` | Server port (Railways will override with `$PORT`) |
   | `NODE_ENV` | `production` | Environment mode |
   | `CLOUDFLARE_R2_ACCESS_KEY_ID` | `your-key` | R2 access key |
   | `CLOUDFLARE_R2_SECRET_ACCESS_KEY` | `your-secret` | R2 secret key |
   | `CLOUDFLARE_R2_BUCKET_NAME` | `threejs-assets` | R2 bucket name |
   | `CLOUDFLARE_R2_ENDPOINT` | `https://...r2.cloudflarestorage.com` | R2 endpoint |
   | `R2_PUBLIC_URL` | `https://pub-...r2.dev` | R2 public URL |

   **Note**: `DATABASE_URL` and `REDIS_URL` are automatically provided by Railway when you add those services.

   **Steps:**
   1. Go to your server service → Variables tab
   2. Click "New Variable"
   3. Add each variable with its value
   4. Save changes

### Step 6: Deploy Server

1. **Automatic Deployment**
   - Push to your main branch
   - Railway will automatically detect changes and deploy

2. **Manual Deployment**
   - Click "Deploy" in the Railway dashboard
   - Or trigger via Railway CLI: `railway up`

### Step 7: Get Server URL

1. **Generate Public URL**
   - In your server service, go to "Settings"
   - Click "Generate Domain"
   - Copy the generated URL (e.g., `https://your-app.railway.app`)

2. **Update Client Environment Variable**
   - Go back to Vercel
   - Update `NEXT_PUBLIC_API_URL` to your Railway server URL
   - Redeploy the client

### Step 8: Verify Deployment

1. **Check Server Health**
   ```bash
   curl https://your-railways-app.railway.app/health
   ```
   Should return: `{"status":"ok","message":"Server is running"}`

2. **Check Server Logs**
   - In Railway dashboard, go to "Deployments"
   - Click on the latest deployment
   - View logs for any errors

3. **Test API Endpoints**
   ```bash
   curl https://your-railways-app.railway.app/api/materials/list
   ```

---

## Environment Variables

### Client (Vercel)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | ✅ Yes | Server API URL | `https://your-app.railway.app` |
| `NODE_ENV` | ✅ Yes | Environment mode | `production` |

### Server (Railways)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `PORT` | ✅ Yes | Server port | `3001` (Railways provides `$PORT`) |
| `NODE_ENV` | ✅ Yes | Environment mode | `production` |
| `CLOUDFLARE_R2_ACCESS_KEY_ID` | ✅ Yes | R2 access key | `your-access-key` |
| `CLOUDFLARE_R2_SECRET_ACCESS_KEY` | ✅ Yes | R2 secret key | `your-secret-key` |
| `CLOUDFLARE_R2_BUCKET_NAME` | ✅ Yes | R2 bucket name | `threejs-assets` |
| `CLOUDFLARE_R2_ENDPOINT` | ✅ Yes | R2 endpoint URL | `https://...r2.cloudflarestorage.com` |
| `R2_PUBLIC_URL` | ✅ Yes | R2 public URL | `https://pub-...r2.dev` |
| `DATABASE_URL` | ⚠️ Optional | PostgreSQL connection (auto-provided by Railway) | `postgresql://...` |
| `REDIS_URL` | ⚠️ Optional | Redis connection (auto-provided by Railway) | `redis://...` |

---

## Post-Deployment

### 1. Update CORS Settings (if needed)

If you encounter CORS errors, ensure your server allows requests from your Vercel domain:

```typescript
// server/src/server.ts
app.use(cors({
  origin: [
    'https://your-app.vercel.app',
    'https://your-app.railway.app',
  ],
  credentials: true,
}));
```

### 2. Set Up Custom Domains (Optional)

**Vercel:**
- Go to Project Settings → Domains
- Add your custom domain
- Configure DNS records as instructed

**Railways:**
- Go to Service Settings → Networking
- Add custom domain
- Configure DNS records

### 3. Monitor Deployments

- **Vercel**: Check deployment logs in the dashboard
- **Railways**: Monitor logs and metrics in the dashboard
- Set up error tracking (e.g., Sentry) if needed

### 4. Test Production Builds Locally

Before deploying, test production builds:

```bash
# Client
cd client
pnpm build
pnpm start

# Server
cd server
pnpm build
pnpm start
```

---

## Troubleshooting

### Client Issues

**Build Fails:**
- Check for TypeScript errors: `pnpm build`
- Verify all dependencies are installed
- Check `next.config.js` configuration

**API Connection Errors:**
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check CORS settings on server
- Ensure server is running and accessible

**Environment Variables Not Working:**
- Remember: `NEXT_PUBLIC_*` variables are embedded at build time
- Redeploy after changing environment variables
- Check variable names (case-sensitive)

### Server Issues

**Build Fails:**
- Check TypeScript compilation: `pnpm build`
- Verify all dependencies in `package.json`
- Check for missing environment variables

**Server Won't Start:**
- Check Railway logs for errors
- Verify `PORT` environment variable (Railways uses `$PORT`)
- Ensure all required environment variables are set

**Database Connection Errors:**
- Verify `DATABASE_URL` is set (auto-provided by Railway)
- Check PostgreSQL service is running
- Test connection string format

**R2 Connection Errors:**
- Verify all R2 credentials are correct
- Check bucket name and endpoint
- Ensure R2 bucket exists and is accessible

### Common Errors

**"Port already in use":**
- Railway automatically assigns ports, use `process.env.PORT`

**"Module not found":**
- Ensure all dependencies are in `package.json`
- Run `pnpm install` before building

**"Environment variable not defined":**
- Check all required variables are set in deployment platform
- Verify variable names match exactly (case-sensitive)

---

## Quick Reference

### Deployment Commands

```bash
# Client - Local Build Test
cd client
pnpm build
pnpm start

# Server - Local Build Test
cd server
pnpm build
pnpm start

# Check Environment Variables
# Vercel: Project Settings → Environment Variables
# Railways: Service → Variables tab
```

### Important URLs

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railways Dashboard**: https://railway.app/dashboard
- **Cloudflare R2**: https://dash.cloudflare.com

### Support

- **Vercel Docs**: https://vercel.com/docs
- **Railways Docs**: https://docs.railway.app
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

## 🎉 Deployment Complete!

Once deployed, your application will be accessible at:
- **Client**: `https://your-app.vercel.app`
- **Server**: `https://your-app.railway.app`

Remember to:
- ✅ Test all functionality in production
- ✅ Monitor logs for errors
- ✅ Set up error tracking
- ✅ Configure custom domains (optional)
- ✅ Set up CI/CD for automatic deployments

Happy deploying! 🚀

