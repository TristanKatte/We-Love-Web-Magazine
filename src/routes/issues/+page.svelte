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

  // Maand mapping voor namen
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

  // Vul sets voor filter dropdowns
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

<main>
  <h1>Alle Issues</h1>

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

  <ul>
    {#each filteredPosts as issue}
      <li>
        <a href={`/issues/${issue.slug}`} aria-label={`Lees meer over ${issue.title}`}>
          <strong>{issue.title}</strong> <br />
          <small>{formatDate(issue.date)} — {issue.author}</small>
        </a>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
  background: transparent;
  min-height: 100vh;
  padding: 1rem;
  }

  h1 {
    color: var(--heading-color);
  }

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
		flex-direction: column;
		gap: 1rem;
		margin: 1rem var(--size-5);
	}

	@media (min-width: 640px) {
		.filters {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	fieldset {
		border: 2px dashed var(--btn-color);
		color: var(--txt-color);
		padding: 0.5rem;
		border-radius: 6px;
	}

	select {
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid var(--btn-color);
		border-radius: 4px;
		background: var(--surface-1);
		color: var(--text-1);
	}

</style>