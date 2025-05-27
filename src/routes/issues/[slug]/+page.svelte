<script>
  export let params;

  const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });

  const slug = params.slug;
  const matched = Object.entries(modules).find(([path]) =>
    path.includes(`${slug}.md`)
  );

  if (!matched) {
    throw error(404, 'Not found');
  }

  const PageComponent = matched[1].default;
</script>

<svelte:component this={PageComponent} />
