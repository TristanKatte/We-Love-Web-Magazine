<script lang="ts">
  export let data;
  const { posts } = data;
</script>

<main>
  <h1>All Issues</h1>
  <ul>
    {#each posts as issue}
      <li>
        <a href={`/issues/${issue.slug}`}>
          <strong>{issue.title}</strong> <br />
          <small>{issue.date} — {issue.author}</small>
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

</style>