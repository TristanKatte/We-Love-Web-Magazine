<script>
  export let post = {
    title: 'Sample Post Title',
    author: 'Author Name',
    date: '2025-06-11',
    content: '<p>Your HTML content here</p>',
    image: '/path/to/image.jpg'
  };
  
  import { onMount } from 'svelte';
  let contentContainer;

  onMount(() => {
    if (contentContainer && post.content) {
      contentContainer.innerHTML = post.content;
    }
  });
</script>

<article class="magazine-post">
  {#if post.image}
    <div class="featured-image" role="img" aria-label={post.title} style="background-image: url({post.image});"></div>
  {/if}

  <header class="post-header">
    <h1 class="post-title">{post.title}</h1>
    <div class="post-meta">
      <span class="author">By {post.author}</span>
      <span class="date">{new Date(post.date).toLocaleDateString()}</span>
    </div>
  </header>

  <section class="post-content" bind:this={contentContainer} />
</article>



<style>
  .magazine-post {
    max-width: 800px;
    margin: 2rem auto;
    font-family: 'Georgia', serif;
    color: #333;
    background: #fff;
    padding: 2rem 2.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    border-radius: 8px;
  }

  .featured-image {
    width: 100%;
    height: 350px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  .post-header {
    margin-bottom: 1rem;
  }

  .post-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: var(--heading-color, #50cece);
  }

  .post-meta {
    font-size: 0.9rem;
    color: var(--txt-color, #666);
    display: flex;
    gap: 1rem;
    font-style: italic;
  }

  .post-content {
    line-height: 1.6;
    font-size: 1.125rem;
  }

  /* Styling for typical content tags inside markdown HTML */
  .post-content p {
    margin-bottom: 1.25rem;
  }

  .post-content h2, .post-content h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--btn-color, #00adb5);
  }

  .post-content a {
    color: var(--btn-color, #00adb5);
    text-decoration: underline;
  }

  .post-content img {
    max-width: 100%;
    border-radius: 4px;
    margin: 1rem 0;
  }
</style>
