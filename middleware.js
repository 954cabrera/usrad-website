import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'; // Use serverless instead of Edge

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({
    analytics: true,
    // Added to avoid Edge middleware issue:
    edgeMiddleware: false, // Disable Edge middleware
    functionPerRoute: false // Use a single serverless function
  })
});