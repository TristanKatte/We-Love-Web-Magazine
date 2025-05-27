import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import path from 'path';

const config = {
  extensions: ['.svelte', '.md'], // Enable .md files as routes/components

  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md']
    })
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $posts: path.resolve('./src/lib/posts')
    }
  }
};

export default config;
