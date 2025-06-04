<script>
  const modules = import.meta.glob('/src/lib/issues/*.md', { eager: true });

  // Convert filename path to slugs and extract metadata
  const issues = Object.entries(modules).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.md', '');
    return {
      slug,
      ...module.metadata
    };
  });
</script>

<h1>All Issues</h1>
<ul>
  {#each issues as issue}
    <li>
      <a href={`/issues/${issue.slug}`}>
        <strong>{issue.title}</strong> <br />
        <small>{issue.date} — {issue.author}</small>
      </a>
    </li>
  {/each}
</ul>
