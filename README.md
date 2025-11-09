# Biome Frontend - AI Fitness Form Coach

**Cloud Run Hackathon 2025 - AI Agents Category**

## Tech Stack

* React 19 + TypeScript
* Tailwind CSS
* React Router

## Features

* Modern responsive UI
* Real-time analysis progress
* Video playback with issue markers
* Comprehensive results display

## Quick Start

```bash
npm install
npm start
```

## Deploy to Cloud Run

```bash
# Update backend URL
echo "REACT_APP_API_URL=https://your-backend-url.run.app" > .env.production

# Deploy
gcloud run deploy biome-frontend --source . --region us-central1 --allow-unauthenticated
```

## Environment Variables

* `REACT_APP_API_URL`: Backend API URL

## UI Updates After Deployment

You can update UI anytime and redeploy in 5-10 minutes:

```bash
git commit -am "ui: Improvements"
gcloud run deploy biome-frontend --source .
```

