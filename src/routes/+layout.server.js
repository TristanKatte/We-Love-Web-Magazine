import { getAllIssues } from '$lib/utils/issues.js';

export async function load() {
  const issues = getAllIssues();
  return {
    featuredPost: issues[0] || null
  };
}

