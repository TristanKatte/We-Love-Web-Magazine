<script>
  import Heading from '$lib/components/atoms/Heading.svelte';
  import Text from '$lib/components/atoms/Text.svelte';
  import Button from '$lib/components/atoms/Button.svelte';
</script>

<section class="hero-content">
  <Heading level={1}>Hi, Welcome to my We Love Web Blog</Heading>
  <Text>Conversations with the creators, thinkers, and doers behind the digital world. Dive into the insights shared by FDND’s guest speakers — where education meets real-world experience.</Text>
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