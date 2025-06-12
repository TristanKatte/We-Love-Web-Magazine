<script>
  export let href = "#";
</script>

<a href={href} class="button">
  <slot />
</a>

<style>
  .button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--btn-color, #00adb5);
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1rem;
  }

  .button:hover {
    background: #009ca8;
  }
</style>
