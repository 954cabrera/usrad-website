import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({
    analytics: true,
    edgeMiddleware: false,
    functionPerRoute: false,
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200],
      domains: [],
      remotePatterns: [],
    },
    imageService: true,
    middlewareConfig: false,  // Explicitly disable middleware
  })
});