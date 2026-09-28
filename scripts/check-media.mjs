/**
 * Checks the pictures and recordings the pages point at.
 *
 * The site build reads links between pages, but not `src` and `poster` inside the raw HTML the
 * guides are written with. A mistyped path there fails silently and shows up as a broken image in
 * the browser. This script resolves every reference in docs/ against the files on disk and lists
 * what is missing, plus any file under static/assets/ that no page points at.
 *
 * Run it with: npm run check-media
 */
import fs from 'node:fs';
import path from 'node:path';

const DOCS = 'docs';
const ASSETS = path.join('static', 'assets');

// src="…" and poster="…" in raw HTML, and ![alt](…) in Markdown.
const HTML_REFERENCE = /(?:src|poster)="([^"]+)"/g;
const MARKDOWN_IMAGE = /!\[[^\]]*\]\(([^)\s]+)/g;

/** Where a reference written on a page lands on disk, or null when it is not ours to check. */
function resolveReference(reference, page) {
  if (/^(https?:|data:|mailto:|#)/.test(reference)) return null; // someone else's server
  if (reference.startsWith('../assets/')) return path.join('static', reference.slice('../'.length));
  if (reference.startsWith('/assets/')) return path.join('static', reference.slice(1));
  if (reference.startsWith('./')) return path.join(DOCS, path.dirname(page), reference.slice(2));
  return null;
}

/** Every file below a directory, as paths relative to the repository. */
function filesUnder(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(full) : [full];
  });
}

const pages = fs.readdirSync(DOCS).filter((name) => /\.mdx?$/.test(name));
const used = new Set();
const missing = [];
let total = 0;

for (const page of pages) {
  const text = fs.readFileSync(path.join(DOCS, page), 'utf8');
  const references = [...text.matchAll(HTML_REFERENCE), ...text.matchAll(MARKDOWN_IMAGE)].map((match) => match[1]);

  for (const reference of references) {
    const file = resolveReference(reference, page);
    if (!file) continue;
    total += 1;
    used.add(path.normalize(file));
    if (!fs.existsSync(file)) missing.push({page, reference});
  }
}

const unused = filesUnder(ASSETS).filter((file) => !used.has(path.normalize(file)));

console.log(`${total} media references in ${pages.length} pages.`);

if (missing.length > 0) {
  console.error(`\n${missing.length} reference(s) point at a file that does not exist:`);
  for (const {page, reference} of missing) console.error(`  ${page}  →  ${reference}`);
} else {
  console.log('Every reference points at a file that exists.');
}

if (unused.length > 0) {
  console.log(`\n${unused.length} file(s) under ${ASSETS}/ that no page points at:`);
  for (const file of unused) console.log(`  ${file}`);
}

process.exitCode = missing.length > 0 ? 1 : 0;
