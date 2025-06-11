// src/lib/utils/slugify.js

export function slugify(str) {
  return str
    .toString()
    .normalize('NFKD')                  // Normalize accented characters
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')            // Replace spaces and underscores with -
    .replace(/[^\w-]+/g, '')            // Remove non-word characters
    .replace(/--+/g, '-')               // Replace multiple dashes with one
    .replace(/^-+|-+$/g, '');           // Remove leading/trailing dashes
}
