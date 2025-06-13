import { getAllIssues } from '$lib/utils/issues';
export async function load() {
  const posts = getAllIssues();
  return { posts };
}