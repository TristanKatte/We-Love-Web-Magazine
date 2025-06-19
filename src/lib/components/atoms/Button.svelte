<script lang="ts">
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let href = '#';
</script>

<a href={href} class="button {size}">
  <span class="text">
    <slot />
  </span>
  <span class="icon-wrapper" aria-hidden="true">
    <slot name="icon" />
  </span>
</a>

<style>
.button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-family: 'montserrat-alternates', 'Segoe UI', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--btn-color);
  background: transparent;
  border: 2px solid var(--btn-color);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-shadow: 0 0 5px var(--btn-color);
  box-shadow:
    0 0 5px var(--btn-color),
    0 0 10px var(--btn-color),
    inset 0 0 5px var(--btn-color);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.button:hover {
  background: var(--btn-color);
  color: black;
  text-shadow: none;
  box-shadow:
    0 0 10px var(--btn-color),
    0 0 20px var(--btn-color),
    inset 0 0 10px white;
}

.button:focus {
  outline: 2px dashed var(--btn-color);
  outline-offset: 4px;
}

/* Size variants */
.button.small {
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
}
.button.medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}
.button.large {
  padding: 1rem 2rem;
  font-size: 1.25rem;
}

/* Icon styling */
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.button:hover .icon-wrapper {
  transform: translateX(0.25rem) scale(1.05);
  filter: drop-shadow(0 0 6px white);
}
</style>
