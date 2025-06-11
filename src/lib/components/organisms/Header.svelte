<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  export let siteTitle = 'We Love Web';
  export let navLinks = [
    { href: '/', label: 'Home' },
    { href: '/issues', label: 'Issues' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
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

  function navigateTo(href) {
    navOpen = false;
    goto(href);
  }
</script>

<header class:hidden={!headerVisible} class="neon-header">
  <div class="top-bar">
    <h1 class="site-title">{siteTitle}</h1>

    <button class="nav-toggle" on:click={() => (navOpen = !navOpen)} aria-label="Menu"> ☰ </button>

    <nav class="main-nav" class:open={navOpen}>
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="nav-link" 
          on:click|preventDefault={() => navigateTo(link.href)}
        >
          {link.label}
        </a>
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
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		background: var(--main-bg-color);
		color: var(--txt-color);
		font-family: 'Orbitron', 'Segoe UI', sans-serif;
		padding: 2rem 1rem 6rem;
		transition: transform 0.3s ease;
		margin: 0;
		overflow-x: hidden;
	}

	.neon-header.hidden {
		transform: translateY(-100%);
	}

	.top-bar {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 2px solid var(--heading-color);
		padding-bottom: 1rem;
	}

	.site-title {
		font-size: 3.5rem;
		font-weight: 700;
		color: var(--heading-color);
		text-shadow: 0 0 10px var(--btn-color);
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        white-space: nowrap;
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
		flex-wrap: wrap;
		justify-content: center;
		gap: 2.5rem;
		width: 100%;
		overflow-x: hidden;
		white-space: normal; /* ✅ allows wrapping */
		box-sizing: border-box;
	}

	.nav-link {
		text-transform: uppercase;
		font-weight: 600;
		font-size: 1rem;
		color: var(--txt-color);
		text-decoration: none;
		position: relative;
		transition: all 0.3s ease;
		flex-shrink: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.nav-link::after {
		content: '';
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
			display: none; /* collapsed by default */
			width: 100%;
			background: rgba(0, 0, 0, 0.2);
			padding: 1rem;
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
