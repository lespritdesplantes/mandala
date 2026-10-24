import type { ImageMetadata } from 'astro';

// Galerie « Jardin et atelier » : toutes les photos de src/assets/photos/jardin-et-atelier/,
// dans un ordre qui suit le fil des saisons (jardin → cueillette → séchage → atelier).
const fichiers = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/jardin-et-atelier/**/*.jpg', {
  eager: true,
});

const PHOTOS: [string, string][] = [
  // Au jardin
  ['paysage/jardin', 'Le jardin en été : massifs de plantes aromatiques et médicinales en pleine croissance'],
  ['portrait/jardin', 'Allée du jardin bordée de plantes aromatiques au feuillage argenté'],
  ['portrait/abeille-pavot', 'Abeille butinant le cœur d’une fleur de pavot rose'],
  ['paysage/passiflore-incarnata', 'Fleur de passiflore aux longs filaments mauves et blancs'],
  ['paysage/tulsi', 'Plants de tulsi en fleurs au jardin'],
  ['portrait/jiaogulan', 'Feuillage dense du jiaogulan'],
  ['paysage/ashwa', 'Jeune plant d’ashwagandha entouré de paillage'],
  ['portrait/ashwagandha', 'Plant d’ashwagandha en pleine croissance'],
  ['portrait/ashwagandhaa', 'Feuilles d’ashwagandha au jardin'],
  ['portrait/achilee', 'Bouquet de petites fleurs blanches au jardin'],
  ['paysage/lombric', 'Sol couvert de paillage, où vivent les vers de terre'],
  ['portrait/mante-religieuse', 'Une mante religieuse verte posée sur une claie de séchage'],
  // Cueillette
  ['paysage/moi-ac-panier', 'Cécile Anselmino au jardin, tenant un panier d’osier rempli de plantes fraîchement cueillies'],
  ['portrait/cueillette-camomille', 'Main effleurant un champ de fleurs de camomille'],
  ['portrait/cueillette-helichryse', 'Panier d’osier rempli de fleurs jaunes d’hélichryse fraîchement cueillies'],
  ['portrait/cueillette', 'Panier de cueillette garni de sauge et de feuilles fraîches'],
  ['portrait/racine-ashwa', 'Racines d’ashwagandha fraîchement récoltées'],
  // Séchage
  ['paysage/camomille', 'Fleurs de camomille étalées pour le séchage'],
  ['paysage/sechoir', 'Claies de séchage chargées de pétales et de boutons de roses'],
  ['portrait/sechoirr', 'Claies de séchage superposées, garnies de rameaux de plantes'],
  ['portrait/plantes-seches', 'Plateau de plantes séchées réparties dans des coupelles'],
  // À l’atelier
  ['portrait/moi-atelier', 'Cécile au travail dans l’atelier, entourée d’étagères de bocaux'],
  ['paysage/atelier', 'L’atelier : étagères de bocaux de plantes et plan de travail'],
  ['portrait/macerat-huileux', 'Fleurs jaunes en macération dans l’huile, vues de près'],
  ['portrait/pot-macerat', 'Grand bocal de fleurs en macération dans l’huile, à la lumière'],
  ['portrait/melange-encens', 'Poudres de plantes et de bois mélangées pour préparer l’encens'],
  ['paysage/pate-encens', 'Pâte d’encens étalée dans un cadre avant d’être façonnée'],
  ['paysage/sechoir-encens', 'Barrettes d’encens séchant sur une claie, parmi des fleurs'],
  ['portrait/encens-qui-sechent', 'Barrettes d’encens alignées sur une claie de séchage'],
  ['portrait/encens-sechant', 'Rangées de barrettes d’encens en train de sécher'],
];

const prefixe = '../assets/photos/jardin-et-atelier/';

export const GALERIE = PHOTOS.map(([chemin, alt]) => {
  const module = fichiers[`${prefixe}${chemin}.jpg`];
  if (!module) throw new Error(`Galerie : photo introuvable « ${chemin}.jpg »`);
  return { id: chemin.replace('/', '-'), src: module.default, alt };
});

// Toute photo du dossier doit avoir sa description (alt) dans la liste ci-dessus
const oubliees = Object.keys(fichiers).filter(
  (f) => !PHOTOS.some(([chemin]) => f === `${prefixe}${chemin}.jpg`),
);
if (oubliees.length > 0) {
  throw new Error(`Galerie : photos sans description : ${oubliees.join(', ')}`);
}
