import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

// Zorg voor correcte __dirname in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		// Opgelost padprobleem: absoluut pad naar de layout-component
		_: path.resolve(__dirname, 'src', 'mdsvex.svelte')
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript', 'svelte']
			});
			const html = escapeSvelte(
				highlighter.codeToHtml(code, { lang, theme: 'poimandres' })
			);
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/components'),
			$content: path.resolve('./src/lib/content'),
			$layouts: path.resolve('./src/layouts')
		}
	}
};

export default config;
