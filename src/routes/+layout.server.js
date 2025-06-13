import { getAllIssues } from '$lib/utils/issues.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  const issues = getAllIssues();
  const filtered = issues.filter((issue) => !isNaN(Date.parse(issue.date)));
  const sortedIssues = filtered.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

  return {
    featuredPost: sortedIssues[0] || null,
    posts: sortedIssues
  };
}