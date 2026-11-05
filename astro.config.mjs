// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project URL needs a base path; Vercel / custom domain / local stay at `/`.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages
    ? 'https://sd9616.github.io'
    : 'https://salonidalal.com',
  base: isGitHubPages ? '/salonidalal.com' : '/',
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
