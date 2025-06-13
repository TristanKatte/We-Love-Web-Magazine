import { error } from '@sveltejs/kit';
import { getIssueBySlug } from '$lib/content/issues';

export async function load({ params }) {
  try {
    const post = getIssueBySlug(params.slug);

    return {
      meta: {
        title: post.title,
        date: post.date,
        categories: post.categories ?? [],
      },
      content: post.html
    };
  } catch (e) {
    throw error(404, e.message);
  }
}
