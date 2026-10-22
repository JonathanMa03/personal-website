import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const failures = [];
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.(html|css)$/.test(entry.name)) files.push(full);
  }
  return files;
}
const files = await walk(root);
for (const file of files) {
  const source = await readFile(file, 'utf8');
  const references = file.endsWith('.html')
    ? [...source.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1])
    : [...source.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)].map(match => match[1]);
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) failures.push(`${path.relative(root, file)}: duplicate IDs`);
  for (const reference of references) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) continue;
    if (reference.startsWith('/')) {
      failures.push(`${path.relative(root, file)}: root-relative URL ${reference}`);
      continue;
    }
    const [pathname, fragment] = reference.split('#');
    const target = pathname ? path.resolve(path.dirname(file), decodeURIComponent(pathname.split('?')[0])) : file;
    try {
      const info = await stat(target);
      if (fragment && info.isFile() && target.endsWith('.html')) {
        const content = await readFile(target, 'utf8');
        const targetIds = [...content.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
        if (!targetIds.includes(decodeURIComponent(fragment))) throw new Error(`missing fragment #${fragment}`);
      }
    } catch (error) {
      failures.push(`${path.relative(root, file)}: ${reference} (${error.message})`);
    }
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${files.length} HTML/CSS files: local references and fragments resolve.`);
}
