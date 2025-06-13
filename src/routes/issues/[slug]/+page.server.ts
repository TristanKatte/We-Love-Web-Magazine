import { getIssueBySlug } from '$lib/content/issues';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = getIssueBySlug(params.slug);

    return {
      post: {
        title: post.title,
        date: post.date,
        content: post.html,
        slug: post.slug
      }
    };
  } catch {
    throw error(404, 'Issue not found');
  }
}