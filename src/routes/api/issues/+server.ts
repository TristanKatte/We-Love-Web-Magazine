import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { json } from '@sveltejs/kit';

// POST handler: maakt een nieuwe issue/post aan als .md-bestand
export async function POST({ request }) {
	const data = await request.json();
	const { title, content, slug } = data;

	if (!title || !content || !slug) {
		return json({ error: 'Missing fields' }, { status: 400 });
	}

	const filePath = path.resolve('src/lib/content/issues', `${slug}.md`);
	const fileContent = `---
title: ${title}
slug: ${slug}
date: ${new Date().toISOString()}
description: ""
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

// GET handler: leest alle posts uit en geeft metadata terug als JSON
export async function GET() {
	const issuesDir = path.resolve('src/lib/content/issues');
	const files = fs.readdirSync(issuesDir).filter((f) => f.endsWith('.md'));

	const posts = files.map((filename) => {
		const filePath = path.join(issuesDir, filename);
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { data } = matter(fileContent);

		return {
			title: data.title,
			slug: data.slug,
			date: data.date,
			description: data.description ?? ''
		};
	});

	return json(posts);
}
