# Railway Deployment Instructions

Follow these steps to deploy the Fashion Forward website on Railway:

## Prerequisites

1. A Railway account (sign up at [railway.app](https://railway.app))
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect Your Repository

1. Log in to your Railway dashboard
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"** (or your Git provider)
4. Choose the repository containing this project
5. Railway will automatically detect the project

### 2. Configure Build Settings

Railway should auto-detect the build settings, but verify:

- **Build Command**: `npm run build`
- **Start Command**: `npx serve -s dist`
- **Root Directory**: `/` (root of the project)

If auto-detection doesn't work, manually set:
- In your project settings, go to **Settings** → **Build & Deploy**
- Set **Build Command** to: `npm run build`
- Set **Start Command** to: `npx serve -s dist`

### 3. Environment Variables

No environment variables are required for this static site deployment.

### 4. Deploy

1. Railway will automatically start building and deploying
2. You can monitor the build logs in the **Deployments** tab
3. Once deployment is successful, Railway will provide a URL (e.g., `your-app.railway.app`)

### 5. Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Click **"Add Custom Domain"**
3. Follow the instructions to configure your domain's DNS settings

## Build Process

The deployment process:
1. Railway installs dependencies (`npm install`)
2. Builds the production bundle (`npm run build`)
3. Serves the static files from the `dist` directory using `serve`

## Troubleshooting

### Build Fails

- Check the build logs in Railway dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility (Railway uses Node 18+ by default)

### Site Not Loading

- Verify the start command is correct: `npx serve -s dist`
- Check that the build completed successfully
- Review deployment logs for errors

### Static Files Not Found

- Ensure the build output directory is `dist` (default for Vite)
- Verify the `serve` command includes `-s` flag for single-page app support

## Notes

- The `serve` package is already included in `package.json` dependencies
- Railway automatically handles HTTPS
- Each push to your main branch will trigger a new deployment
- You can set up preview deployments for pull requests in Railway settings

