import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const data = await request.json();
  const { title, content, slug } = data;

  if (!title || !content || !slug) {
    return json({ error: 'Missing fields' }, { status: 400 });
  }

  // Pad naar je MD-bestanden
  const filePath = path.resolve('src/lib/content/issues', `${slug}.md`);

  const fileContent = `---
title: ${title}
slug: ${slug}
date: ${new Date().toISOString()}
---

${content}
`;

  try {
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    return json({ message: 'Issue saved' });
  } catch (error) {
    console.error(error);
    return json({ error: 'Failed to write file' }, { status: 500 });
  }
}
