<script lang="ts">
  export let post: { title: string; image: string; author: string; date: string; content: string };
</script>

<article class="post-layout-b">
  <aside class="sidebar">
    <img src={post.image} alt={post.title} class="sidebar-image" />
    <div class="metadata">
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date}</p>
    </div>
  </aside>
  <div class="main-content">
    <h1>{post.title}</h1>
    <div class="content">{@html post.content}</div>
  </div>
</article>

<style>
  .post-layout-b {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .sidebar {
    width: 30%;
    background-color: #e0e0e0;
    padding: 1rem;
  }
  .sidebar-image {
    width: 100%;
    height: auto;
  }
  .metadata {
    margin-top: 1rem;
  }
  .main-content {
    width: 70%;
    padding: 1rem;
  }
  .content {
    margin-top: 1rem;
  }
</style>
