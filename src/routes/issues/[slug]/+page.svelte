<script>
   import PostLayoutMagazine from '$lib/components/organisms/PostLayoutMagazine.svelte';
  export let data;
</script>

<article class="prose mx-auto">
  {@html data.post.content}
</article>



<PostLayoutMagazine post={data.post} /> 