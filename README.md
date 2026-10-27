# CityPulse AI — Traffic & Accident Risk Predictor

A polished Next.js 14 / TypeScript NNDL showcase for short-horizon traffic congestion and synthetic risk-index forecasting. Designed for Vercel's free tier; no API keys, database, or paid services required.

## Run locally
Requirements: Node.js 18.17+ (Node 20 LTS recommended).
```bash
npm install
npm run dev
```
Open http://localhost:3000. Production build:
```bash
npm run build
npm start
```

## Routes
- `/` — landing page and feature overview
- `/dashboard` — simulated live dashboard, map, selected-segment details and trend charts
- `/experiments` — searchable/filterable experiment cards
- `/experiments/traffic-lstm` (and other IDs) — architecture, metric placeholder and training/evaluation sections
- `/about` — workflow and documentation

## Vercel deployment
1. Push the project folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Next.js framework preset and build command `npm run build`.
4. No environment variables are required.

## Data and model integration
- `lib/data.ts`: replace `initialSegments`, `history`, and experiment metadata with your own documented dataset/model details.
- `components/LiveDashboard.tsx`: replace the interval's synthetic update with a fetch to your API route or a hosted model endpoint. Vercel functions are request-driven; do not rely on a persistent server process.
- `components/TrafficMap.tsx`: currently a schematic SVG of a central Chennai-like road grid, not a geospatial/navigation map. To use a real map, integrate a provider with a suitable free/academic tier and follow its attribution and usage limits.
- `app/experiments/[id]/page.tsx`: replace illustrative metric numbers and decorative bars with actual validation metrics and training history.
- `public/`: optional media assets go here. If adding a background video, place an optimized MP4/WebM at `public/videos/city-traffic.mp4` and use a muted, autoplay, loop, playsInline `<video>` with a CSS gradient fallback. Suggested 1920×1080, H.264 MP4, ideally under 8 MB. No binary asset is needed by this starter.

## Important scientific caveat
The refresh feed is **simulated in the browser**. This starter does not include a trained neural network, actual traffic/weather API integration, calibrated accident probability, or real map tiles. Metric values are illustrative placeholders. Use real, licensed data; split time-series data chronologically; report metrics from held-out data; and never use this demo for real-world traffic or emergency decisions.
