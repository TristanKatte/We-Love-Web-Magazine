<!-- <script lang="ts">
  // Import all layout components
  import PostLayoutA from './PostLayouts/PostLayoutA.svelte';
  import PostLayoutB from './PostLayouts/PostLayoutB.svelte';
  import PostLayoutC from './PostLayouts/PostLayoutC.svelte';
  import PostLayoutD from './PostLayouts/PostLayoutD.svelte';

  export let post;

  const layoutComponents = {
    A: PostLayoutA,
    B: PostLayoutB,
    C: PostLayoutC,
    D: PostLayoutD
  };

  // Fallback to layout A if not specified or invalid
  const LayoutComponent = layoutComponents[post.layout] ?? PostLayoutA;
</script>

<svelte:component this={LayoutComponent} {post} /> -->
