<script>
	import Header from '$lib/components/organisms/Header.svelte';
</script>

<main>
  <Header />
  <slot />
</main>

<style>
  main {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
