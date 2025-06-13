<script lang="ts">
  export let post: { title: string; image: string; content: string };
</script>

<article class="post-layout-d">
  <div class="image-container">
    <img src={post.image} alt={post.title} class="post-image" />
  </div>
  <div class="text-content">
    <h1>{post.title}</h1>
    <div class="content">{@html post.content}</div>
  </div>
</article>

<style>
  .post-layout-d {
    width: 100%;
    padding: 2rem;
    background-color: #fafafa;
  }
  .image-container {
    width: 100%;
    height: 40vh;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  .post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text-content {
    padding: 2rem;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .content {
    margin-top: 1rem;
  }
</style>
