<script lang="ts">
  export let post: { title: string; image: string; content: string };
</script>

<article class="post-layout-a">
  <div class="image-container">
    <img src={post.image} alt={post.title} class="background-image" />
    <h1 class="title-overlay">{post.title}</h1>
  </div>
  <div class="content">
    {@html post.content}
  </div>
</article>

<style>
  .post-layout-a {
    position: relative;
    width: 100%;
    color: white;
  }
  .image-container {
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
  }
  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    text-align: center;
  }
  .content {
    padding: 2rem;
    background-color: #f4f4f4;
  }
</style>
