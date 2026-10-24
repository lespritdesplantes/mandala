// Prépare les photos sources pour le site :
// - renomme en slug ASCII (sans espaces ni accents)
// - redimensionne à 2400 px maximum sur le grand côté
// - applique l'orientation EXIF puis supprime les métadonnées (GPS, appareil…)
// - range dans portrait/ ou paysage/ selon l'orientation réelle de la photo
// - ne garde qu'un exemplaire des photos en double (même contenu)
// Les originaux (sources/photos/) ne sont pas versionnés ; seules les sorties
// de src/assets/photos/ le sont. Usage : npm run photos
import { createHash } from 'node:crypto';
import { readdir, readFile, mkdir, stat, rm } from 'node:fs/promises';
import { join, extname, basename, dirname, relative } from 'node:path';
import sharp from 'sharp';

const SOURCE = 'sources/photos';
const SORTIE = 'src/assets/photos';
const GRAND_COTE = 2400;

// Dossier source → dossier de sortie. Un dossier « orienté » se répartit
// entre <dossier>/portrait et <dossier>/paysage selon les dimensions.
// L'ordre fixe la priorité en cas de doublon : le premier dossier gagne.
const DOSSIERS = [
  ['photos alcoolatures portrait', 'alcoolatures'],
  ['photos baumes', 'baumes'],
  ['photos huiles de massage portrait', 'huiles-de-massage'],
  ['photos encens portrait', 'encens'],
  ['Baton de fumigation', 'batons-de-fumigation'],
  ['photos porte encens portrait', 'porte-encens'],
  ['photos jardin atelier paysage', 'jardin-et-atelier', { oriente: true }],
  ['photos jardin et atelier portrait', 'jardin-et-atelier', { oriente: true }],
  ['accueil présentation photos en paysage', 'accueil', { oriente: true }],
  ['accueil presentation photos en portrait', 'accueil', { oriente: true }],
];

// Renommages explicites (nom source slugifié → nom de sortie)
const RENOMMAGES = {
  // doublon de nom dans l'ancien dossier portrait ; seule photo « jardin » en paysage
  'jardin-et-atelier/jardinn': 'jardin',
  'encens/cones-eucalyptrus': 'cones-eucalyptus',
};

export function slugifier(nom) {
  return nom
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Les noms de dossiers peuvent être en NFC ou NFD selon l'OS d'origine
const parSlug = new Map(DOSSIERS.map(([src, cible, opts = {}], rang) => [slugifier(src), { cible, rang, ...opts }]));

// 1. Inventaire des sources
const photos = [];
for (const dossier of await readdir(SOURCE)) {
  const config = parSlug.get(slugifier(dossier));
  if (!config) continue;
  for (const fichier of await readdir(join(SOURCE, dossier))) {
    if (!/\.jpe?g$/i.test(fichier)) continue;
    const entree = join(SOURCE, dossier, fichier);
    const empreinte = createHash('sha1').update(await readFile(entree)).digest('hex');
    photos.push({ entree, config, slug: slugifier(basename(fichier, extname(fichier))), empreinte });
  }
}

// 2. Dédoublonnage : dossier prioritaire d'abord, puis nom parlant plutôt que « img-2026… »
const generique = (slug) => /^img-\d/.test(slug);
photos.sort(
  (a, b) => a.config.rang - b.config.rang || generique(a.slug) - generique(b.slug) || a.slug.localeCompare(b.slug),
);
const retenues = new Map();
for (const photo of photos) {
  const deja = retenues.get(photo.empreinte);
  if (deja) {
    console.log(`doublon ignoré : ${photo.entree} (= ${deja.entree})`);
    continue;
  }
  retenues.set(photo.empreinte, photo);
}

// 3. Conversion
const produites = new Set();
let traitees = 0;
let ignorees = 0;

for (const { entree, config, slug } of retenues.values()) {
  const image = sharp(entree).rotate();
  let cible = config.cible;
  if (config.oriente) {
    const { width, height } = await sharp(entree).rotate().toBuffer({ resolveWithObject: true }).then((r) => r.info);
    cible = `${config.cible}/${width >= height ? 'paysage' : 'portrait'}`;
  }
  const nom = RENOMMAGES[`${config.cible}/${slug}`] ?? slug;
  const sortie = join(SORTIE, cible, `${nom}.jpg`);
  if (produites.has(sortie)) throw new Error(`Collision de noms : ${sortie} (source ${entree})`);
  produites.add(sortie);
  await mkdir(dirname(sortie), { recursive: true });

  const deja = await stat(sortie).catch(() => null);
  if (deja && deja.mtimeMs >= (await stat(entree)).mtimeMs) {
    ignorees++;
    continue;
  }

  await image
    .resize({ width: GRAND_COTE, height: GRAND_COTE, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(sortie);
  traitees++;
  console.log(`${entree} → ${sortie}`);
}

// 4. Nettoyage des sorties qui ne correspondent plus à aucune source
async function lister(dossier) {
  const entrees = await readdir(dossier, { withFileTypes: true }).catch(() => []);
  const fichiers = await Promise.all(
    entrees.map((e) => (e.isDirectory() ? lister(join(dossier, e.name)) : [join(dossier, e.name)])),
  );
  return fichiers.flat();
}
let supprimees = 0;
for (const fichier of await lister(SORTIE)) {
  if (!produites.has(fichier)) {
    await rm(fichier);
    supprimees++;
    console.log(`supprimée (orpheline) : ${relative('.', fichier)}`);
  }
}

console.log(`\n${traitees} photo(s) traitée(s), ${ignorees} déjà à jour, ${supprimees} orpheline(s) supprimée(s).`);
