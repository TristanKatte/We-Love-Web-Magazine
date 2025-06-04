<script>
  import { isMenuOpen } from '$lib/stores/menu.js';
  import MenuGrid from '$lib/components/molecules/MenuGrid.svelte';
</script>

<button on:click={() => isMenuOpen.set(true)}>
  Open Menu
</button>

<MenuGrid />

<main>
  <slot />
</main>

<!-- <style>
.menu-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1100;
  background: #fff;
  color: #111;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style> -->
