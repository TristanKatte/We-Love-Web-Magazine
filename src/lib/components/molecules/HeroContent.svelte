<script>
  import Heading from '$lib/components/atoms/Heading.svelte';
  import Text from '$lib/components/atoms/Text.svelte';
  import Button from '$lib/components/atoms/Button.svelte';
</script>

<section class="hero-content">
  <Heading level={1}>Hi, I’m Tristan. Frontend Developer.</Heading>
  <Text>I create responsive websites using modern frontend technologies. Let's build something great together.</Text>
  <Button href="#posts">View Posts</Button>
</section>

<style>
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 75%;
  }
</style>