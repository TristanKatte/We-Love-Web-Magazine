import { getAllIssues } from '$lib/content/issues';

export function load() {
  const posts = getAllIssues();
  return { posts };
}
