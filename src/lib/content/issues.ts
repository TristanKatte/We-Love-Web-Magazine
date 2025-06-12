import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = 'src/lib/content/issues';

export function getAllIssues() {
  const files = fs.readdirSync('src/lib/content/issues');

  return files.map((filename) => {
    const slug = filename.replace('.md', '');
    const fileContent = fs.readFileSync(`src/lib/content/issues/${filename}`, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description ?? ''
    };
  });
}

