<script>
  import Header from '$lib/components/organisms/Header.svelte';
  export let data;

  // Destructure featuredPost from data
  const { featuredPost } = data;
</script>

<main>
  <Header {featuredPost} />
  <slot />
</main>

<style>
  main {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>