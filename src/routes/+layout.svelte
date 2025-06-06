<script>
  import { isMenuOpen } from '$lib/stores/menu.js';
  import OverlayMenu from '$lib/components/organisms/OverlayMenu.svelte';
</script>


<OverlayMenu />


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
