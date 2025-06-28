<script>
  // data of logic kan hier als nodig
</script>

<main class="about-me">
  <article>
    <header>
      <h1>Over Mij</h1>
    </header>

    <section>
      <p>
        Hallo! Ik ben [Je Naam], een enthousiaste webontwikkelaar gespecialiseerd in toegankelijke, performante en moderne webapplicaties.
      </p>
      <p>
        Mijn passie ligt bij het bouwen van gebruiksvriendelijke websites die voor iedereen toegankelijk zijn.
      </p>
      <p>
        Als je meer wilt weten, neem gerust contact op via de <a href="/contact">contactpagina</a>.
      </p>
    </section>
  </article>
</main>

<style>
  /* Styles hetzelfde als eerder, mobile-first */
  main.about-me {
    padding: 1rem;
    max-width: 600px;
    margin-inline: auto;
    font-family: system-ui, sans-serif;
    color: #222;
    line-height: 1.5;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    color: #007acc;
  }

  a {
    color: #007acc;
    text-decoration: underline;
  }
  a:focus, a:hover {
    outline: 2px solid #007acc;
    outline-offset: 2px;
  }

  @media (min-width: 600px) {
    main.about-me {
      padding: 2rem;
      font-size: 1.125rem;
    }
  }
</style>
