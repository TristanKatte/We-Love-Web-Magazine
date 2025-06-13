<script lang="ts">
  export let post: { title: string; image: string; content: string };
</script>

<article class="post-layout-c">
  <div class="image-column">
    <img src={post.image} alt={post.title} class="post-image" />
  </div>
  <div class="text-column">
    <h1>{post.title}</h1>
    <div class="content">{@html post.content}</div>
  </div>
</article>

<style>
  .post-layout-c {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .image-column {
    width: 50%;
  }
  .post-image {
    width: 100%;
    height: auto;
  }
  .text-column {
    width: 50%;
  }
  .content {
    margin-top: 1rem;
  }
</style>
