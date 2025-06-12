import { getAllIssues } from '$lib/utils/issues.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  const issues = getAllIssues();
  const sortedIssues = issues.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    featuredPost: sortedIssues[0] || null,
    posts: sortedIssues
  };
}