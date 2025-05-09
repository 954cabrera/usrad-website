import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// No Vercel adapter, just static site generation
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static'  // Generate a completely static site
});