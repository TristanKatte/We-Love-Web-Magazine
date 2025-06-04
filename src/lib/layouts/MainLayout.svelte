<script>
  import MenuOverlay from '$lib/components/organisms/MenuOverlay.svelte';
  import { isMenuOpen as menuStore } from '$lib/stores/menu.js';

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Posts', href: '/pages' },
    { label: 'Contact', href: '/contact' }
  ];
</script>

<button on:click={() => $menuStore = !$menuStore}>
  {$menuStore ? 'Close' : 'Menu'}
</button>

<MenuOverlay
  isOpen={$menuStore}
  items={menuItems}
  on:close={() => $menuStore = false}
/>

<main>
  <slot />
</main>

<style>

button {
  background: none;
  color: #010101;
  font-size: 1rem;
  border: 1px solid teal;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>