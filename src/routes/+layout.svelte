<script>
  import GridMenu from '$lib/components/organisms/MenuGrid.svelte';
  import { isMenuOpen } from '$lib/stores/menu.js';
</script>

<GridMenu />

<button on:click={() => $isMenuOpen = !$isMenuOpen}>
  {$isMenuOpen ? 'Close Menu' : 'Open Menu'}
</button>

<main>
  <slot />
</main>

<style>
  button {
    position: fixed;
    top: 20px;
    right: 20px;
    background: none;
    color: white;
    font-size: 1rem;
    border: 1px solid teal;
    padding: 0.5rem 1rem;
    cursor: pointer;
    z-index: 1001;
  }
</style>
