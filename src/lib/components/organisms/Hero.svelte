<script>
  import HeroContent from '$lib/components/molecules/HeroContent.svelte';
</script>

<section class="hero">
  <HeroContent />
</section>

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 4rem 2rem;
    background: #008080;
    text-align: left;
  }
</style>
