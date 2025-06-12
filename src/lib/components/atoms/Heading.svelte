<script>
  export let level = 1;
</script>

<svelte:element this={`h${level}`} class="heading">
  <slot />
</svelte:element>

<style>
  .heading {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--heading-color, #00adb5);
  }
</style>
