# How to Get Your Railway URL

## Step-by-Step Deployment Guide

### 1. Go to Railway Dashboard
- Visit: https://railway.app
- Sign in with your GitHub account

### 2. Create New Project
- Click the **"New Project"** button (usually a "+" or "New" button)
- Select **"Deploy from GitHub repo"**
- Authorize Railway to access your GitHub if prompted
- Find and select your repository: **`marz-kari/acm_hackathon`**

### 3. Wait for Deployment
- Railway will automatically start building
- You'll see build logs in the deployment view
- Wait 2-3 minutes for the build to complete

### 4. Generate Public URL
After deployment completes:

**Option A: Automatic URL**
- Railway should automatically assign a URL
- Look for it in the deployment logs or service overview

**Option B: Generate Domain**
1. Click on your **service/project** in Railway
2. Go to **Settings** tab
3. Scroll to **Networking** section
4. Click **"Generate Domain"** or **"Public Domain"**
5. Railway will create a URL like: `your-project-name.up.railway.app`

### 5. If Build Fails
Check the build logs for errors. Common issues:
- Make sure `nixpacks.toml` is in the root directory ✅ (we have this)
- Verify build command is `npm run build` ✅ (configured)
- Check that start command is `npx serve -s dist` ✅ (configured)

### 6. Verify Settings
In Railway project settings, verify:
- **Build Command**: `npm run build`
- **Start Command**: `npx serve -s dist`
- **Root Directory**: `/` (root)

## Quick Checklist
- [ ] Repository connected to Railway
- [ ] Build completed successfully
- [ ] Public domain generated
- [ ] URL visible in Railway dashboard

Once you have the URL, click it or copy it to your browser to see your website!

