<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import Hero from '$lib/components/organisms/Hero.svelte';
	
	export let data;
</script>


<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Hero />

<section id="posts">
  <ul class="posts">
    {#each data.posts as post, i}
      <li class="post size-{i % 3}">
        <a href={`/issues/${post.slug}`} class="title">{post.title}</a>
        <p class="date">{formatDate(post.date)}</p>
        <p class="description">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
section {
  height: 100vh;
  overflow-x: hidden;
  font-family: montserrat, sans-serif;
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--size-6);
  grid-auto-rows: 200px; /* Base height unit */
  padding: var(--size-5);
}

.post {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-2);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  padding: var(--size-5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease;
}
.post:hover {
  transform: translateY(-5px);
}

/* Vary heights using grid row spans */
.size-0 {
  grid-row: span 2;
}
.size-1 {
  grid-row: span 1;
}
.size-2 {
  grid-row: span 3;
}

/* Typography inside blocks */
.title {
  font-size: var(--font-size-fluid-2);
  font-weight: bold;
  text-transform: capitalize;
  color: var(--text-1);
  text-decoration: none;
}
.title:hover {
  text-decoration: underline;
}
.date {
  color: var(--text-2);
  font-size: 0.9rem;
  margin-top: var(--size-2);
}
.description {
  margin-top: var(--size-3);
  color: var(--text-1);
  font-size: 1rem;
}
</style>
