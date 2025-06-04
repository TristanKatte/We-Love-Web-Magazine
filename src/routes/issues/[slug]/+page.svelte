<script>
	import { error } from '@sveltejs/kit';

	export let params;

	const modules = import.meta.glob('/src/lib/issues/*.md', { eager: true });
	const slug = params.slug;

	const matched = Object.entries(modules).find(([path]) => path.includes(`/${slug}.md`));

	if (!matched) {
		throw error(404, 'Issue not found');
	}

	const PageComponent = matched[1].default;
	const metadata = matched[1].metadata;
</script>

<article>
	<h1>{metadata.title}</h1>
	<p><em>{metadata.date} — {metadata.author}</em></p>
	<svelte:component this={PageComponent} />
</article>
