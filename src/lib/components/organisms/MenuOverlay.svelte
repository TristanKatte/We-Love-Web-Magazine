<script>
  import MenuGrid from '$lib/components/molecules/MenuGrid.svelte';
  import { fade, fly } from 'svelte/transition';
  export let isOpen = false;
  export let items = [];
</script>

{#if isOpen}
  <div class="overlay">
    <p>Overlay is open!</p>
    <MenuGrid {items} />
  </div>
{:else}
  <p>Overlay is closed.</p>
{/if}

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: red; /* just for debug */
  border: 5px solid yellow;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}
</style>