import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join('src', 'lib', 'content', 'issues');

export function getAllIssues() {
  const files = fs.readdirSync(contentDir);

  return files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      // ✅ Use filename (minus extension) as slug
      const slug = filename.replace(/\.md$/, '');

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author ?? '',
        description: data.description ?? ''
      };
    });
}

export function getIssueBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);

  // ✅ Try to read the file directly
  if (!fs.existsSync(filePath)) {
    throw new Error(`No issue found for slug: ${slug}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const html = marked(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author ?? '',
    description: data.description ?? '',
    html
  };
}
