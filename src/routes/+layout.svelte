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
    padding-top: 10rem; /* of de exacte hoogte van je header */
    min-height: 100vh;  /* zodat je content zichtbaar blijft */
  }
</style>