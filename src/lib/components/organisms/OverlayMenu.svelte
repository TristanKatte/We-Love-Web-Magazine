<script>
  import { tick, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { isMenuOpen } from '$lib/stores/menu.js';
  import MenuItem from '../atoms/MenuItem.svelte';
  import { afterNavigate } from '$app/navigation';
  import { browser } from '$app/environment';

  // Load markdown files
  const modules = import.meta.glob('/src/lib/issues/*.md', { eager: true });

  let items = Object.entries(modules).map(([path, mod], i) => ({
    slug: path.split('/').pop().replace('.md', ''),
    title: mod.metadata?.title || `Issue ${i + 1}`,
    image: mod.metadata?.image || '',
    color: `hsl(${(i * 40) % 360}, 70%, 60%)`,
  }));

  // Handle Escape key to close menu
  function handleKeydown(e) {
    if (e.key === 'Escape') isMenuOpen.set(false);
  }

  // Reactive block to handle open/close state
  $: {
    if (browser && $isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeydown);
      animateOverlay();
    } else if (browser) {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    }
  }

  onDestroy(() => {
    if (browser) {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    }
  });

  // Automatically close menu on route change
  if (browser) {
    afterNavigate(() => {
      isMenuOpen.set(false);
    });
  }

  // GSAP animation for overlay and items
  async function animateOverlay() {
  await tick();

  if (!browser) return;

  const overlay = document.querySelector('.menu-overlay');
  const items = document.querySelectorAll('.menu-item');

  console.log('Overlay:', overlay);
  console.log('Menu items:', items);

  // Check they exist
  if (overlay) {
    gsap.fromTo(
      overlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  }

  if (items.length > 0) {
    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  } else {
    console.warn('No .menu-item elements found to animate.');
  }
}
</script>

{#if $isMenuOpen}
  <div class="menu-overlay">
    <button class="close-btn" on:click={() => isMenuOpen.set(false)}>✕</button>

    <div class="menu-grid">
      {#each items as item}
        <MenuItem {...item} />
      {/each}
    </div>
  </div>
{/if}

<style>
  .menu-overlay {
    position: fixed;
    inset: 0;
    background: #111;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    overflow-y: auto;
    opacity: 0; /* animated in */
  }

  .close-btn {
    align-self: flex-end;
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    margin-bottom: 1.5rem;
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 600px) {
    .menu-grid {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    .close-btn {
      font-size: 1.8rem;
    }
  }
</style>
