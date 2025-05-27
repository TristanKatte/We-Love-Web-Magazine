<script>
  import MenuOverlay from '$lib/components/organisms/MenuOverlay.svelte';

  let isMenuOpen = false;

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Posts', href: '/pages' },
    { label: 'Contact', href: '/contact' }
  ];
</script>

<button on:click={() => isMenuOpen = !isMenuOpen}>
  {isMenuOpen ? 'Close' : 'Menu'}
  <p>isMenuOpen: {isMenuOpen ? 'OPEN' : 'CLOSED'}</p>
</button>

<MenuOverlay isOpen={isMenuOpen} items={menuItems} />

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