<script>
  export let footerTitle = 'We Love Web';
  export const author = 'Tristan Katte';
  export let footerSections = [
    {
      title: 'Contact',
      items: [
        { label: 'Email', href: 'mailto:info@weloveweb.com' },
        { label: 'Twitter', href: 'https://twitter.com/weloveweb', external: true },
        { label: 'RSS', href: '/rss.xml', external: true }
      ]
    },
    {
      title: 'Links',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Issues', href: '/issues' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    },
    {
      title: 'About',
      items: [
        { label: 'Our Story', href: '/about' },
        { label: 'Careers', href: '/careers' }
      ]
    }
  ];
</script>

<footer class="neon-footer" aria-label="Footer">
  <div class="footer-container">
   

    <div class="footer-sections">
      {#each footerSections as section}
        <nav class="footer-section" aria-label={section.title}>
          <h3>{section.title}</h3>
          <ul>
            {#each section.items as item}
              <li>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : null}
                  rel={item.external ? "noopener noreferrer" : null}
                >
                  {item.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      {/each}
    </div>

    <address class="footer-copy" role="contentinfo">
      &copy; {new Date().getFullYear()} {author}'s {footerTitle}. All rights reserved.
    </address>
  </div>
</footer>

<style>
.neon-footer {
max-width: 100%;
  background: var(--main-bg-color);
  color: var(--txt-color);
  font-family: 'Orbitron', 'Segoe UI', sans-serif;
  padding: 3rem 1rem 2rem;
  border-top: 2px solid var(--btn-color);
  display: flex;
  justify-content: center;
  
}

.footer-container {  
  width: 100%;         
  margin: 0;      
  text-align: center;
  padding: 0 1rem;  
  text-align: center;   
}

.footer-title {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 700;
  color: var(--heading-color);
  text-shadow: 0 0 10px var(--btn-color);
  margin-bottom: 2rem;
}

.footer-sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  flex: 1 1 180px;
  max-width: 220px;
  text-align: left;
}

.footer-section h3 {
  color: var(--btn-color);
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.6rem;
}

.footer-section a {
  color: var(--txt-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
}

.footer-section a:hover,
.footer-section a:focus {
  color: var(--btn-color);
  text-decoration: underline;
}

.footer-copy {
  font-style: normal;
  font-size: 0.9rem;
  color: var(--txt-color);
  opacity: 0.7;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .footer-sections {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    max-width: 100%;
    text-align: center;
  }
}

</style>
