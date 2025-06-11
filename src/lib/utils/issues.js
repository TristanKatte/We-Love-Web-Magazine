import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { slugify } from '$lib/utils/slugify';

const issuesDir = 'src/lib/content/issues';

/**
 * Get metadata for all issues/posts
 */
export function getAllIssues() {
  const files = fs.readdirSync(issuesDir);

  return files.map(filename => {
    const fullPath = path.join(issuesDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: data.slug || slugify(data.title),
    };
  });
}

/**
 * Get a single issue/post by slug and parse its content to HTML
 * @param {string} slug
 * @returns {object|null}
 */
export function getIssueBySlug(slug) {
  const fullPath = path.join(issuesDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug,
    content: marked(content), // converts markdown content to HTML
  };
}
