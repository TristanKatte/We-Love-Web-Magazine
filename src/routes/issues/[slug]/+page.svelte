<script>
  export let data;
  const { post } = data;
</script>

<article class="issue-content">
  <h1>{post.title}</h1>
  <p class="post-meta">{post.date}</p>
  <div class="post-body" innerHTML={post.content}></div>
</article>
