<script>
  let formStatus = '';
  let submitting = false;

  async function handleSubmit(event) {
    event.preventDefault();
    submitting = true;
    formStatus = '';

    const form = event.target;
    const data = new FormData(form);

    try {
      await new Promise(r => setTimeout(r, 1000));
      formStatus = 'Bedankt! Je bericht is verstuurd.';
      form.reset();
    } catch (e) {
      formStatus = 'Er is iets misgegaan, probeer het later opnieuw.';
    } finally {
      submitting = false;
    }
  }
</script>

<main aria-busy={submitting} class="contact">
  <article>
    <header>
      <h1>Contact</h1>
    </header>

    <form on:submit={handleSubmit} aria-live="polite" novalidate>
      <fieldset>
        <legend>Je gegevens</legend>

        <div class="form-group">
          <label for="name">Naam</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Je naam"
            required
            autocomplete="name"
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="voorbeeld@mail.com"
            required
            autocomplete="email"
            aria-required="true"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Bericht</legend>
        <div class="form-group">
          <label for="message">Bericht</label>
          <textarea
            id="message"
            name="message"
            placeholder="Schrijf hier je bericht"
            rows="5"
            required
            aria-required="true"
          ></textarea>
        </div>
      </fieldset>

      <button type="submit" disabled={submitting} aria-disabled={submitting}>
        {submitting ? 'Verzenden...' : 'Verzenden'}
      </button>

      {#if formStatus}
        <p role="alert" class="status-message">{formStatus}</p>
      {/if}
    </form>
  </article>
</main>

<style>
  main.contact {
    max-width: 600px;
    margin-inline: auto;
    padding: 1rem;
    font-family: system-ui, sans-serif;
    color: #222;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #007acc;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  fieldset {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 6px;
  }

  legend {
    font-weight: 700;
    padding: 0 0.5rem;
    color: #007acc;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  input, textarea {
    font-size: 1rem;
    padding: 0.5rem;
    border: 2px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.2s;
    font-family: inherit;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #007acc;
    box-shadow: 0 0 3px #007acc;
  }

  button {
    background-color: #007acc;
    color: white;
    font-weight: 600;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button[disabled], button[aria-disabled="true"] {
    background-color: #999;
    cursor: not-allowed;
  }

  button:hover:not([disabled]) {
    background-color: #005fa3;
  }

  .status-message {
    margin-top: 1rem;
    font-weight: 600;
  }

  @media (min-width: 600px) {
    main.contact {
      padding: 2rem;
      font-size: 1.125rem;
    }
  }
</style>
