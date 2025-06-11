import { getAllIssues } from '$lib/utils/issues';

export const load = async () => {
  const issues = getAllIssues();
  return { issues };
};
