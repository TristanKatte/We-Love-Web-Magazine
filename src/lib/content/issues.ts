import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked'; // als je HTML wil

const contentDir = path.join('src', 'lib', 'content', 'issues');

export function getAllIssues() {
  const files = fs.readdirSync(contentDir);

  return files.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description ?? ''
    };
  });
}

export function getIssueBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description ?? '',
    html: marked(content)
  };
}
