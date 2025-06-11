<script>
  import { onMount } from 'svelte';

  export let siteTitle = "We Love Web";
  export let navLinks = [
    { href: "/", label: "Home" },
    { href: "/trends", label: "Trends" },
    { href: "/deep-dive", label: "Deep Dive" },
    { href: "/tech", label: "Tech" },
    { href: "/contact", label: "Contact" }
  ];

  let navOpen = false;
  let lastScrollY = 0;
  let headerVisible = true;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    headerVisible = currentScrollY < lastScrollY || currentScrollY < 100;
    lastScrollY = currentScrollY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class:hidden={!headerVisible} class="neon-header">
  <div class="top-bar">
    <h1 class="site-title">{siteTitle}</h1>

    <button class="nav-toggle" on:click={() => (navOpen = !navOpen)} aria-label="Menu">
      ☰
    </button>

    <nav class="main-nav" class:open={navOpen}>
      {#each navLinks as link}
        <a href={link.href} class="nav-link" on:click={() => (navOpen = false)}>{link.label}</a>
      {/each}
    </nav>
  </div>

  <section class="featured-post">
    <h2 class="featured-title">
      <a href="/posts/next-gen">Next Gen Intelligence: The Age of Neural Interfaces</a>
    </h2>
    <p class="featured-summary">
      A look into tech merging with human cognition, and what the future holds.
    </p>
  </section>

  <!-- Waves -->
  <div class="wave-container" aria-hidden="true">
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
  </div>
</header>

<style>
  :global(:root) {
    --main-bg-color: #393c44;
    --btn-color: #00adb5;
    --txt-color: #c2c2c2;
    --heading-color: #50cece;
    --project-card-color: #495057;
    --strong-color: #f2e9e4;
  }

.neon-header {
  background: var(--main-bg-color);
  color: var(--txt-color);
  font-family: 'Orbitron', 'Segoe UI', sans-serif;
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%;
  margin: 0;
  z-index: 10;
}

  .neon-header.hidden {
    transform: translateY(-100%);
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--heading-color);
    padding-bottom: 1rem;
  }

  .site-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--heading-color);
    text-shadow: 0 0 10px var(--btn-color);
  }

  .nav-toggle {
    display: none;
    font-size: 2rem;
    color: var(--btn-color);
    background: none;
    border: none;
    cursor: pointer;
  }

  .main-nav {
    display: flex;
    gap: 1.5rem;
  }

  .nav-link {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    color: var(--txt-color);
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--btn-color);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: right;
  }

  .nav-link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .featured-post {
    margin-top: 2rem;
    background: rgba(0, 173, 181, 0.05);
    border-left: 4px solid var(--btn-color);
    padding: 1rem 1.5rem;
    backdrop-filter: blur(4px);
    border-radius: 4px;
  }

  .featured-title {
    color: var(--strong-color);
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .featured-title a {
    text-decoration: none;
    color: var(--heading-color);
    text-shadow: 0 0 8px var(--btn-color);
  }

  .featured-summary {
    font-style: italic;
    color: var(--txt-color);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .top-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .main-nav {
      flex-direction: column;
      width: 100%;
      display: none;
      background: rgba(0, 0, 0, 0.2);
      padding: 1rem;
      margin-top: 1rem;
      border-radius: 6px;
    }

    .main-nav.open {
      display: flex;
    }

    .nav-toggle {
      display: block;
      align-self: flex-end;
    }

    .nav-link {
      font-size: 1.2rem;
    }
  }
</style>
