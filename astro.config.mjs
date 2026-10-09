// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Static output by default: the landing page is pre-rendered at build time.
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
