<script>
  import { isMenuOpen } from '$lib/stores/menu.js';
  import MenuGrid from '$lib/components/molecules/MenuGrid.svelte';
</script>

<button on:click={() => isMenuOpen.update(n => !n)}>
  {$isMenuOpen ? 'Close' : 'Menu'}
</button>

<MenuGrid />

<main><slot /></main>

<style>
button {
  background: none;
  color: #010101;
  font-size: 1rem;
  border: 1px solid teal;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1100;
  position: relative;
}
</style>
