// Informations générales réutilisées dans le layout, le SEO et les données structurées.
export const SITE = {
  nom: 'Mandala – L’esprit des plantes',
  nomCourt: 'L’esprit des plantes',
  url: 'https://lespritdesplantes.org',
  description:
    'Production biologique de plantes aromatiques et médicinales, cueillette sauvage et transformation artisanale en sud Gironde : alcoolatures, baumes, huiles de massage, encens.',
  productrice: 'Cécile Anselmino',
  telephone: '06 64 98 21 65',
  telephoneIntl: '+33664982165',
  adresse: {
    commune: 'Saint-Loubert',
    codePostal: '33210',
    departement: 'Gironde',
    region: 'Nouvelle-Aquitaine',
    pays: 'FR',
  },
  creditGraphique: 'Annabelle Caley',
} as const;

export const NAVIGATION = [
  { href: '/', label: 'Accueil' },
  { href: '/produits/', label: 'Produits' },
  { href: '/usages-et-precautions/', label: 'Usages et précautions' },
  { href: '/jardin-et-atelier/', label: 'Jardin et atelier' },
  { href: '/ou-nous-trouver/', label: 'Où nous trouver' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const GAMMES = [
  { slug: 'alcoolatures', nom: 'Alcoolatures' },
  { slug: 'baumes', nom: 'Baumes' },
  { slug: 'huiles-de-massage', nom: 'Huiles de massage' },
  { slug: 'encens', nom: 'Encens' },
  { slug: 'batons-de-fumigation', nom: 'Bâtons de fumigation' },
  { slug: 'porte-encens', nom: 'Porte-encens' },
] as const;
