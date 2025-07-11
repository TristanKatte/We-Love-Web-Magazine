<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	article {
		height: 100%;
		width: 100%;
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		padding: var(--size-4);
		


		h1 {
			text-transform: capitalize;
			color: var(--heading-color);
			font-family: 'Cantarell', sans-serif;
			font-weight: 400;
			padding: var(--size-3);
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		p {
			font-family: "Ruluko", sans-serif;
			font-weight: 400;
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-7);
			margin-bottom: var(--size-7);
			font-family: "Numans", sans-serif;
			font-weight: 400;

			> * {
				padding: var(--size-2) var(--size-3);
				border-radius: var(--radius-round);
			}
		}
		
	}

	
</style>
