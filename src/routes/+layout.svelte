<script>
  import MenuOverlay from '$lib/components/organisms/MenuOverlay.svelte';
  import { isMenuOpen as menuStore } from '$lib/stores/menu.js';

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Issues', href: '/issues' },
    { label: 'Contact', href: '/contact' }
  ];
</script>

<!-- Menu Toggle Button -->
<button on:click={() => $menuStore = !$menuStore} class="menu-toggle">
  {$menuStore ? 'Close' : 'Menu'}
</button>

<!-- Global Menu Overlay -->
<MenuOverlay
  isOpen={$menuStore}
  items={menuItems}
  on:close={() => $menuStore = false}
/>

<!-- Page content slot -->
<main>
  <slot />
</main>

<style>
.menu-toggle {
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: transparent;
  color: #111;
  font-size: 1rem;
  border: 1px solid teal;
  padding: 0.5rem 1rem;
  z-index: 2000;
  cursor: pointer;
}
</style>
