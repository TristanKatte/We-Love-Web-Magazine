<script>
  export let data;
  const { Content, metadata } = data; // Assuming mdsvex + layout passing these
</script>

<article class="issue-page">

  {#if metadata.heroImage}
    <!-- Original hero image section, optional fallback -->
    <section class="hero">
      <img src={metadata.heroImage} alt={metadata.title} />
    </section>
  {:else}
    <!-- Gradient background hero -->
    <section class="hero-gradient">
      <div class="hero-text">
        <h1>{metadata.title}</h1>
        {#if metadata.subtitle}
          <h2 class="subtitle">{metadata.subtitle}</h2>
        {/if}
      </div>
    </section>
  {/if}

  <header class="issue-header">
    {#if metadata.heroImage}
      <h1>{metadata.title}</h1>
      {#if metadata.subtitle}
        <h2 class="subtitle">{metadata.subtitle}</h2>
      {/if}
    {/if}
    {#if metadata.date}
      <p class="date">{metadata.date}</p>
    {/if}
  </header>

  <section class="content">
    <Content />
  </section>

</article>

<style>
  .issue-page {
    max-width: 900px;
    margin: 3rem auto;
    padding: 0 1rem;
    font-family: 'Georgia', serif;
    color: #111;
    line-height: 1.6;
  }

  /* Remove margin/padding from hero image section if using gradient */
  .hero {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 2rem;
  }
  .hero img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }

  /* New gradient hero */
  .hero-gradient {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    border-radius: 12px;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #667eea, #764ba2, #6b8dd6);
    color: white;
    text-align: center;
    padding: 1rem;
  }

  .hero-text h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.07em;
  }
  .hero-text .subtitle {
    font-size: 1.5rem;
    font-style: italic;
    margin-top: 0.5rem;
    opacity: 0.9;
  }

  .issue-header {
    /* Only show header text if heroImage is present */
    margin-bottom: 3rem;
    text-align: center;
  }

  .issue-header h1, .issue-header .subtitle {
    display: none; /* Hide if gradient hero is showing */
  }

  .date {
    font-size: 0.9rem;
    color: #999;
    text-align: center;
    margin-bottom: 2rem;
  }

  .content :global(p) {
    margin-bottom: 1.4rem;
    font-size: 1.125rem;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Headings inside content */
  .content :global(h2) {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .content :global(h3) {
    font-size: 1.5rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  /* Images inside content */
  .content :global(img) {
    max-width: 100%;
    border-radius: 10px;
    margin: 2rem auto;
    display: block;
  }

  /* Optional blockquote style */
  .content :global(blockquote) {
    font-style: italic;
    color: #555;
    border-left: 4px solid #ccc;
    margin: 2rem 0;
    padding-left: 1rem;
  }
</style>
