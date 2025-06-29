<script>
  // data of logic kan hier als nodig
</script>


  <article class="about-me">
    <header>
      <h1>Over Mij</h1>
    </header>

    <section>
      <p>
        Hallo! Ik ben Tristan, een enthousiaste webontwikkelaar/frontend developer gespecialiseerd in toegankelijke, performante en moderne webapplicaties.
      </p>
      <p>
        Mijn passie ligt bij het bouwen van gebruiksvriendelijke websites die voor iedereen toegankelijk zijn.
      </p>
      <p>
        Als je meer wilt weten, neem gerust contact op via de <a href="/contact">contactpagina</a> of bezoek mijn portfolio.
      </p>
    </section>
  </article>


<style>
  /* Styles hetzelfde als eerder, mobile-first */
.about-me {
    padding: 1rem;
    max-width: 600px;
    margin-inline: auto;
    font-family: system-ui, sans-serif;
    color: var(--txt-color);
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
    .about-me {
      padding: 2rem;
      font-size: 1.125rem;
    }
  }
</style>
