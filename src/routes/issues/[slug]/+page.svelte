<script lang="ts">
  import PostLayoutWrapper from '$lib/components/organisms/PostLayouts/PostLayoutWrapper.svelte';
  export let data;
</script>

<PostLayoutWrapper post={data.post} />
