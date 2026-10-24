// Vérifications avant mise en production, sur le site construit (dist/) :
// 1. tous les liens internes pointent vers une page ou un fichier existant ;
// 2. aucun marqueur « À CONFIRMER » ni terme interdit n'est publié.
// Usage : npm run build && npm run verifier
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';

const INTERDITS = [
  /[àa] confirmer/i,
  /cicatris/i,
  /anti-?inflammatoire/i,
  /anti-?microb/i,
  /antivira/i,
  /antibact/i,
  /antisepti/i,
  /gu[ée]ri/i,
  /\bsoign(?!eus)/i, // « soigneusement » reste autorisé
  /soulag/i,
  /cystite/i,
  /arthr(?:ite|ose)/i,
  /rhumatism/i,
  /sevrage/i,
  /d[ée]press(?!eur)/i, // « antidépresseurs » (interaction médicamenteuse) reste autorisé
  /anxi[ée]t[ée]|anxiolyt/i,
  /insomni/i,
  /cholest[ée]rol/i,
  /(pression|tension) art[ée]rielle/i,
  /adaptog[èe]n/i,
  /aphrodisia/i,
  /burn-?out/i,
  /paludisme|covid/i,
  /armoise annuelle/i,
  /06 ?64 ?98 ?21 ?65|\+33664982165/,
];

async function lister(dossier) {
  const entrees = await readdir(dossier, { withFileTypes: true });
  const fichiers = await Promise.all(
    entrees.map((e) => (e.isDirectory() ? lister(join(dossier, e.name)) : [join(dossier, e.name)])),
  );
  return fichiers.flat();
}

const existe = (chemin) => stat(chemin).then(() => true, () => false);

async function cibleExiste(href) {
  const chemin = decodeURIComponent(href.split(/[?#]/)[0]);
  if (chemin.endsWith('/')) return existe(join(DIST, chemin, 'index.html'));
  return (await existe(join(DIST, chemin))) || existe(join(DIST, chemin, 'index.html'));
}

const fichiers = await lister(DIST);
const pages = fichiers.filter((f) => f.endsWith('.html'));
const scripts = fichiers.filter((f) => f.endsWith('.js'));
const erreurs = [];

for (const page of pages) {
  const html = await readFile(page, 'utf-8');
  const nom = relative(DIST, page);

  for (const [, href] of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
    if (href.startsWith('//')) continue;
    if (!(await cibleExiste(href))) erreurs.push(`${nom} : lien cassé → ${href}`);
  }

  // Texte visible + attributs lus par les lecteurs d'écran ou les moteurs (alt, title, aria-label, meta, JSON-LD)
  for (const motif of INTERDITS) {
    const trouve = html.match(motif);
    if (trouve) erreurs.push(`${nom} : terme interdit « ${trouve[0]} »`);
  }
}

for (const script of scripts) {
  const js = await readFile(script, 'utf-8');
  for (const motif of INTERDITS) {
    const trouve = js.match(motif);
    if (trouve) erreurs.push(`${relative(DIST, script)} : terme interdit « ${trouve[0]} »`);
  }
}

if (erreurs.length > 0) {
  console.error(`✗ ${erreurs.length} problème(s) :\n` + erreurs.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log(`✓ ${pages.length} pages vérifiées : aucun lien interne cassé, aucun terme interdit ni marqueur « À CONFIRMER ».`);
