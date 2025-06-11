// src/lib/utils/slugify.js

export function slugify(str = '') {
  return str
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}
