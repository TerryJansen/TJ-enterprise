import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from '../src/site-data.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let downloaded = 0;
for (const project of projects) {
  const target = path.join(root, project.image);
  try {
    const existing = await stat(target);
    if (existing.size > 0) continue;
  } catch {}
  const response = await fetch(project.imageUrl, { headers: { 'User-Agent': 'TJ-Enterprise static site asset fetch' } });
  if (!response.ok) throw new Error(`Image fetch failed for ${project.slug}: HTTP ${response.status}`);
  const type = response.headers.get('content-type') || '';
  if (!type.startsWith('image/')) throw new Error(`Unexpected content type for ${project.slug}: ${type}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1024) throw new Error(`Image too small for ${project.slug}: ${bytes.length} bytes`);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, bytes);
  downloaded += 1;
  console.log(`${project.slug}: ${type}, ${bytes.length} bytes`);
}
console.log(`Downloaded ${downloaded} project images; ${projects.length} total projects.`);
