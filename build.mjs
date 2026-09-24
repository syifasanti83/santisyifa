import { cpSync, mkdirSync, rmSync } from 'node:fs';

const root = process.cwd();
const out = root + '/public';

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const items = ['index.html', 'images'];

for (const item of items) {
  cpSync(root + '/' + item, out + '/' + item, { recursive: true });
}

console.log('OK: folder "public" dibuat berisi ' + items.length + ' item situs.');