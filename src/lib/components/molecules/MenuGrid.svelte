<script>
  import { onMount, tick } from 'svelte';
  import { isMenuOpen } from '$lib/stores/menu.js';

  let anime;
  let hasMounted = false;
  let items = [];

  // Load Markdown metadata eagerly
  const modules = import.meta.glob('/src/lib/issues/*.md', { eager: true });
  items = Object.entries(modules).map(([path, mod], i) => ({
    slug: path.split('/').pop().replace('.md', ''),
    title: mod.metadata?.title || `Issue ${i + 1}`,
    image: mod.metadata?.image || '/placeholder.jpg',
  }));

  // Set hasMounted true on client only
  onMount(async () => {
    hasMounted = true;
    const mod = await import('animejs');
    anime = mod.default || mod;
  });

  // Animate when menu opens
$: if ($isMenuOpen && anime && hasMounted) {
  (async () => {
    await tick();
    console.log('Animating grid items:', document.querySelectorAll('.grid-item').length);             // wait for DOM update
    await new Promise(r => setTimeout(r, 50)); // tiny delay
    anime({
      targets: '.grid-item',
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: anime.stagger(100, { start: 200 }),
      duration: 600,
      easing: 'easeOutExpo'
    });
  })();
}

  // Reset styles when menu closes, but only in browser
  $: if (!$isMenuOpen && hasMounted) {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = 'scale(0.8)';
    });
  }
</script>

{#if $isMenuOpen}
  <div class="overlay">
    <button class="close-btn" on:click={() => isMenuOpen.set(false)}>✕</button>
    <div class="grid-container">
      {#each items as { slug, title, image }}
        <div class="grid-item">
          <a href={`/issues/${slug}`} class="item-link">
            <img src={image} alt={title} />
            <div class="overlay-text">
              <h3>{title}</h3>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0.95);
    z-index: 1000;
    overflow-y: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close-btn {
    align-self: flex-end;
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 1200px;
  }

  .grid-item {
    opacity: 0;
    transform: scale(0.8);
    transition: transform 0.3s ease;
    overflow: hidden;
    border-radius: 8px;
    background: #111;
  }

  .grid-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .item-link {
    position: relative;
    display: block;
    text-decoration: none;
    color: white;
  }

  .overlay-text {
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    width: 100%;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
  }

  .overlay-text h3 {
    margin: 0;
    font-size: 1rem;
  }
</style>
