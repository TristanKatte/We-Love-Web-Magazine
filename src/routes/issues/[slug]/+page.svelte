<script>
  import PostLayoutMagazine from '$lib/components/organisms/PostLayoutMagazine.svelte';
  export let data; // contains post data from load()
</script>

<PostLayoutMagazine post={data.post} />