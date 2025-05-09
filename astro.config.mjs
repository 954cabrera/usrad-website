import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'; // Import the Vercel adapter

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({
    analytics: true,
    edgeMiddleware: false, // Disable Edge middleware
    functionPerRoute: false // Use a single serverless function
  })
});