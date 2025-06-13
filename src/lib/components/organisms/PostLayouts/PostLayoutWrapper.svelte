<script lang="ts">
  import PostLayoutDefault from './PostLayoutDefault.svelte';
  import PostLayoutB from './PostLayoutB.svelte';
  import PostLayoutC from './PostLayoutC.svelte';
  import PostLayoutD from './PostLayoutD.svelte';

  export let post;

  const layouts = {
    A: PostLayoutDefault,
    B: PostLayoutB,
    C: PostLayoutC,
    D: PostLayoutD
  };

  const LayoutComponent = layouts[post.layout] ?? PostLayoutDefault;
</script>

<svelte:component this={LayoutComponent} {post} />
