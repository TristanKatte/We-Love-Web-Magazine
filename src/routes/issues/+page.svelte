<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
	const { posts } = data;

	// Filters
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

	for (const post of posts) {
		const d = parseDateParts(post.date);
		years.add(d.year);
		months.add(d.month);
		days.add(d.day);
	}

	$: filteredPosts = posts.filter((post) => {
		const d = parseDateParts(post.date);
		return (
			(!filters.year || d.year === filters.year) &&
			(!filters.month || d.month === filters.month) &&
			(!filters.day || d.day === filters.day)
		);
	});
</script>

<svelte:head>
	<title>Issues</title>
	<meta name="description" content="Issues" />
</svelte:head>

<section aria-labelledby="filter-heading" class="filters-section">
	<form class="filters" aria-labelledby="filter-heading" on:submit|preventDefault>
		<h2 id="filter-heading" class="visually-hidden">Filter posts by date</h2>

		<fieldset>
			<legend>Jaar</legend>
			<select bind:value={filters.year}>
				<option value="">Alle Jaren</option>
				{#each Array.from(years).sort() as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</fieldset>

		<fieldset>
			<legend>Maand</legend>
			<select bind:value={filters.month}>
				<option value="">Alle Maanden</option>
				{#each monthMap as m}
					<option value={m.value}>{m.name}</option>
				{/each}
			</select>
		</fieldset>

		<fieldset>
			<legend>Dag</legend>
			<select bind:value={filters.day}>
				<option value="">Alle Dagen</option>
				{#each Array.from(days).sort() as day}
					<option value={day}>{day}</option>
				{/each}
			</select>
		</fieldset>
	</form>
</section>

<section class="container" aria-labelledby="blog-heading">
	<h2>Issues</h2>
	<section class="cards" aria-label="Blog posts">
		{#each filteredPosts as issue, i}
			<article class="card {i === 0 ? 'card--long' : ''}">
				<a
					href={`/issues/${issue.slug}`}
					aria-label={`Lees meer over ${issue.title}`}
					class="card__link"
				>
					<img
						class="card__img"
						src={issue.image ? `/images/${issue.image}` : `/images/fallback.jpg`}
						alt={`Afbeelding bij ${issue.title}`}
						loading="lazy"
					/>
					<header class="card__overlay">
						<h2 class="card__title">{issue.title}</h2>
						{#if issue.tags?.length}
							<ul class="card__tags" aria-label="Tags">
								{#each issue.tags as tag}
									<li class="card__tag">{tag}</li>
								{/each}
							</ul>
						{/if}
					</header>
				</a>
			</article>
		{/each}
	</section>
</section>

<style>
	h2 {
		color: var(--heading-color);
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}

	section {
		padding: var(--size-5);
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
		border: 0;
	}

	.filters {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1rem var(--size-5);
	}

	@media (min-width: 640px) {
		.filters {
			flex-direction: row;
			flex-wrap: wrap;
			align-items: flex-start;
		}
	}

	fieldset {
		border: 2px dashed var(--btn-color);
		color: var(--txt-color);
		padding: 0.75rem;
		border-radius: 6px;
		min-width: 0;
		flex: 1 1 25px;
	}

	select {
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid var(--btn-color);
		border-radius: 4px;
		background-color: var(--surface-1);
		color: var(--text-1);
		width: 100%;
		box-sizing: border-box;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.cards {
			grid-template-columns: repeat(3, 1fr);
			grid-auto-rows: 200px;
		}
	}

	.card {
		position: relative;
		overflow: hidden;
		border-radius: 12px;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -2px rgb(0 0 0 / 0.05);
		cursor: pointer;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.card:hover,
	.card:focus-within {
		transform: translateY(-5px);
		box-shadow:
			0 20px 25px -5px rgb(0 0 0 / 0.2),
			0 10px 10px -5px rgb(0 0 0 / 0.1);
	}

	.card__link {
		display: block;
		height: 100%;
		color: inherit;
		text-decoration: none;
		position: relative;
	}

	.card__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.5s ease;
	}

	.card:hover .card__img,
	.card:focus-within .card__img {
		transform: scale(1.05);
	}

	.card__overlay {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
		color: white;
		padding: 1rem;
		display: flex;
		align-items: flex-end;
		height: 50%;
		border-bottom-left-radius: 12px;
		border-bottom-right-radius: 12px;
		box-sizing: border-box;
	}

	.card__title {
		margin: 0;
		font-size: 1.25rem;
		line-height: 1.2;
	}

	.card__tags {
		display: flex;
		gap: 0.4rem;
		margin: 0.4rem 0 0 0;
		padding: 0;
		list-style: none;
		flex-wrap: wrap;
	}

	.card__tag {
		font-size: 0.75rem;
		background: rgba(255 255 255 / 0.25);
		color: white;
		padding: 0.15rem 0.5rem;
		border-radius: 10px;
		user-select: none;
		white-space: nowrap;
	}

	.card--long {
		grid-row: span 2;
		height: 100%;
	}

	@media (max-width: 767px) {
		.card--long {
			grid-row: auto;
			height: 300px;
		}
	}
</style>
