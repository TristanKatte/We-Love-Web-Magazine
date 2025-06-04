<script>
  import { tick } from 'svelte';
  import { isMenuOpen } from '$lib/stores/menu.js';
  import { gsap } from 'gsap';

  let items = [];

  // Load markdown metadata eagerly
  const modules = import.meta.glob('/src/lib/issues/*.md', { eager: true });
  items = Object.entries(modules).map(([path, mod], i) => ({
    slug: path.split('/').pop().replace('.md', ''),
    title: mod.metadata?.title || `Issue ${i + 1}`,
    image: mod.metadata?.image || '', // leave empty to use background colors
  }));

  // Animate menu items when menu opens
  $: if ($isMenuOpen) {
    tick().then(() => {
      gsap.fromTo(
        '.grid-item',
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    });
  }
</script>

{#if $isMenuOpen}
  <div class="overlay">
    <button class="close-btn" on:click={() => isMenuOpen.set(false)}>✕</button>

    <div class="grid-container">
      {#each items as { slug, title, image }, i}
        <a
          href={`/issues/${slug}`}
          class="grid-item"
          style="background: {image ? `url(${image}) center/cover no-repeat` : `hsl(${(i * 40) % 360}, 70%, 60%)`}"
          aria-label={title}
        >
          <div class="overlay-text">
            <h3>{title}</h3>
          </div>
        </a>
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
    display: block;
    border-radius: 8px;
    overflow: hidden;
    padding: 1rem;
    color: white;
    text-decoration: none;
    position: relative;
    min-height: 180px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.4);
  }

  .overlay-text {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    padding: 0.5rem 1rem;
  }

  .overlay-text h3 {
    margin: 0;
    font-size: 1.2rem;
  }
</style>
