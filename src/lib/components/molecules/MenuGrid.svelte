<script>
  import { isMenuOpen } from '$lib/stores/menu.js';
  import { onMount } from 'svelte';

  let menuItems = [];

  onMount(async () => {
    // Dynamically import all issue markdown files
    const modules = import.meta.glob('/src/lib/posts/issue-*.md', { eager: true });
    menuItems = Object.entries(modules).map(([path, module], index) => ({
      id: `issue-${index + 1}`,
      title: module.metadata.title || `Issue ${index + 1}`,
      image: module.metadata.image || '/default-image.jpg',
      slug: path.split('/').pop().replace('.md', '')
    }));
  });
</script>

{#if $isMenuOpen}
  <div class="grid-menu">
    <div class="grid-container">
      {#each menuItems as { id, title, image, slug }}
        <div class="grid-item">
          <a href={`/issues/${slug}`} class="menu-item">
            <img src={image} alt={title} />
            <div class="overlay">
              <h3>{title}</h3>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .grid-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    overflow-y: auto;
  }

  .grid-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .grid-item:hover img {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .grid-item:hover .overlay {
    opacity: 1;
  }

  .overlay h3 {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
  }
</style>
