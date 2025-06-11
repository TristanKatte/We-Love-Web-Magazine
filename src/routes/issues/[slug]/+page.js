import { getIssueBySlug } from '$lib/utils/issues';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await getIssueBySlug(params.slug);

  if (!post) {
    return {
      status: 404,
      error: new Error('Issue not found')
    };
  }

  return {
    post
  };
}
