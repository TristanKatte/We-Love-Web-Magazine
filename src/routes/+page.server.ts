import { getAllIssues } from '$lib/content/issues';


export function load() {
  const posts = getAllIssues();

  return {
    posts,
    featuredPost: posts[0] // of hoe je dit ook bepaalt
  };
}
