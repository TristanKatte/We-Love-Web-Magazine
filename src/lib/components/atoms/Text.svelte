<p class="text">
  <slot />
</p>

<style>
  .text {
    font-size: 1.5em;
    color: var(--txt-color, #eeeeee);
    max-width: 60ch;
    line-height: 1.6;
    font-family: numans, sans-serif;
  }

  @media (min-width: 1024px) {
    .text {
      font-size: 1.2em;
    }
  }

    @media (min-width: 768px) {
    .text {
      font-size: 1.1em;
    }
  }

    @media (max-width: 480px) {
    .text {
      font-size: 1em;
    }
  }
</style>
