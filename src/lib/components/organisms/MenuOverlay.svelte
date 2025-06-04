<script>
  export let isOpen = false;
  export let items = [];

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

{#if isOpen}
  <div class="overlay">
    <button class="close-button" on:click={() => dispatch('close')}>✕</button>
    <nav>
      <ul>
        {#each items as item}
          <li><a href={item.href}>{item.label}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
{/if}

<style>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  z-index: 1000;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  margin: 1rem 0;
}

nav a {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}
</style>
