<script>
  import { page } from '$app/stores';
  import MenuItem from '$lib/components/atoms/MenuItem.svelte';

  export let items = [];

  $: current = $page.url.pathname;
</script>

<div class="grid">
  {#each items as item}
    <MenuItem href={item.href} current={current}>
      {item.label}
    </MenuItem>
  {/each}
</div>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 800px;
}
</style>