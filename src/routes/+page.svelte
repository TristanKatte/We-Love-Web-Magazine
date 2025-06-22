<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import Hero from '$lib/components/organisms/Hero.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	export let data;

	let filters = {
		year: '',
		month: '',
		day: ''
	};

	let years = new Set<string>();
	let months = new Set<string>();
	let days = new Set<string>();

	const monthMap = [
		{ name: 'Januari', value: '01' },
		{ name: 'Februari', value: '02' },
		{ name: 'Maart', value: '03' },
		{ name: 'April', value: '04' },
		{ name: 'Mei', value: '05' },
		{ name: 'Juni', value: '06' },
		{ name: 'Juli', value: '07' },
		{ name: 'Augustus', value: '08' },
		{ name: 'September', value: '09' },
		{ name: 'Oktober', value: '10' },
		{ name: 'November', value: '11' },
		{ name: 'December', value: '12' }
	];

	function parseDateParts(dateStr: string) {
		const d = new Date(dateStr);
		return {
			year: d.getFullYear().toString(),
			month: (d.getMonth() + 1).toString().padStart(2, '0'),
			day: d.getDate().toString().padStart(2, '0')
		};
	}

	for (const post of data.posts) {
		const d = parseDateParts(post.date);
		years.add(d.year);
		months.add(d.month);
		days.add(d.day);
	}

	$: filteredPosts = data.posts.filter((post) => {
		const d = parseDateParts(post.date);
		return (
			(!filters.year || d.year === filters.year) &&
			(!filters.month || d.month === filters.month) &&
			(!filters.day || d.day === filters.day)
		);
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Hero />

<section aria-labelledby="filter-heading" class="filters-section">
	<form class="filters" method="GET" aria-labelledby="filter-heading">
		<h2 id="filter-heading" class="visually-hidden">Filter posts by date</h2>

		<fieldset>
			<legend>Jaar</legend>
			<select id="filter-year" name="year">
				<option value="">Alle Jaren</option>
				{#each Array.from(years).sort() as year}
					<option value={year} selected={filters.year === year}>{year}</option>
				{/each}
			</select>
		</fieldset>

		<fieldset>
			<legend>Maand</legend>
			<select id="filter-month" name="month">
				<option value="">Alle Maanden</option>
				{#each monthMap as m}
					<option value={m.value} selected={filters.month === m.value}>{m.name}</option>
				{/each}
			</select>
		</fieldset>

		<fieldset>
			<legend>Dag</legend>
			<select id="filter-day" name="day">
				<option value="">Alle Dagen</option>
				{#each Array.from(days).sort() as day}
					<option value={day} selected={filters.day === day}>{day}</option>
				{/each}
			</select>
		</fieldset>

		<noscript>
			<button type="submit">Pas Filters toe</button>
		</noscript>
	</form>
</section>

<section aria-label="List of posts" id="posts">
	<section class="posts">
		{#each filteredPosts.slice(0, 4) as post, i}
			<article class="post" aria-labelledby={`post-title-${i}`}>
				<header>
					<h3 class="title" id={`post-title-${i}`}>
						<a href={`/issues/${post.slug}`}>{post.title}</a>
					</h3>
					<time class="date" datetime={post.date}>{formatDate(post.date)}</time>
				</header>
				<p class="description">{post.description}</p>
			</article>
		{/each}
	</section>
</section>

<style>
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		border: 0;
	}

	.filters {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin: 1rem var(--size-5);
	}

	fieldset {
		border: 2px dashed var(--btn-color);
		color: var(--txt-color);
	}

	select {
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid var(--btn-color);
		border-radius: 4px;
		background: var(--surface-1);
		color: var(--text-1);
	}

	.posts {
		display: flex;
		flex-flow: row nowrap;
		margin: var(--size-5);
	}

	@media (max-width: 1024px) {
		.posts {
			column-count: 2;
		}
	}
	@media (max-width: 640px) {
		.posts {
			column-count: 1;
		}
	}

	.post {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: var(--surface-2);
		background: transparent;
		border: 2px solid var(--btn-color);
		border-radius: 8px;
		display: inline-block;
		width: 100%;
		margin: 1em;
		padding: var(--size-5);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.post:hover {
		transform: translateY(-5px);
	}

	.post:focus-within {
		outline: 4px solid var(--btn-color);
		outline-offset: 4px;
		box-shadow: 0 0 0 4px rgba(0, 122, 204, 0.2);
	}

	.title {
		font-size: var(--font-size-fluid-2);
		font-weight: bold;
		text-transform: capitalize;
		margin: 0;
	}
	.title a {
		color: var(--heading-color);
		text-decoration: none;
	}

	.title a:focus {
		outline: none; /* because the card gets the focus style */
		text-decoration: underline;
	}

	.title a:hover,
	.title a:focus {
		text-decoration: underline;
	}

	.date {
		color: var(--strong-color);
		font-size: 0.9rem;
		margin-top: var(--size-2);
		display: block;
	}

	.description {
		margin-top: var(--size-3);
		color: var(--txt-color);
		font-size: 1rem;
	}
</style>
