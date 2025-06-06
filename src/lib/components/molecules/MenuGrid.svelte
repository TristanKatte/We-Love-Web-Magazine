<script>
  import MenuItem from '../atoms/MenuItem.svelte';
  export let items = [];
</script>

<div class="menu-grid">
  {#each items as item}
    <MenuItem {...item} className="grid-item" />
  {/each}
</div>

<style>
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 600px) {
    .menu-grid {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.2rem;
    }
  }

  /* You could define .grid-item spacing rules here if needed */
</style>
