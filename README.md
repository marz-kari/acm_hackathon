# Fashion Forward Website

A beautiful, responsive website for Fashion Forward - a fashion organization at the University of San Diego.

## Features

- **About Section**: Mission, values, and community impact
- **Events Showcase**: Upcoming and past events with filtering
- **Sustainability Section**: Visual storytelling about eco-conscious practices
- **Contact Section**: Inquiry form and social media links
- **Modern Design**: Minimalist aesthetics with soft gradients
- **Smooth Animations**: Framer Motion powered scroll animations and micro-interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Hook Form

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Railway

1. **Connect your repository** to Railway
2. **Set build command**: `npm run build`
3. **Set start command**: `npx serve -s dist`
4. **Deploy**: Railway will automatically deploy on push to your main branch

The `serve` package is already included in dependencies, so Railway will use it to serve the static files.

## Project Structure

```
src/
  components/
    About.tsx
    Events.tsx
    Sustainability.tsx
    Contact.tsx
    Header.tsx
    Footer.tsx
    Layout.tsx
  App.tsx
  main.tsx
  index.css
```
