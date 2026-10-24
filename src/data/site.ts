// Informations générales réutilisées dans le layout, le SEO et les données structurées.
export const SITE = {
  nom: 'Mandala – L’esprit des plantes',
  nomCourt: 'L’esprit des plantes',
  url: 'https://lespritdesplantes.org',
  description:
    'Production biologique de plantes aromatiques et médicinales, cueillette sauvage et transformation artisanale en sud Gironde : alcoolatures, baumes, huiles de massage, encens.',
  productrice: 'Cécile Anselmino',
  formeJuridique: 'Entreprise individuelle (EI)',
  email: 'contact@lespritdesplantes.org',
  // Pas de numéro de téléphone publié pour l'instant
  adresse: {
    rue: '389 rue André Jean Brana',
    commune: 'Saint-Loubert',
    codePostal: '33210',
    departement: 'Gironde',
    region: 'Nouvelle-Aquitaine',
    pays: 'FR',
  },
  siren: '814 695 524',
  tva: 'FR88814695524',
  hebergeur: {
    nom: 'Cloudflare, Inc.',
    // Adresse vérifiée sur cloudflare.com/website-terms/ (section Contact), octobre 2026
    adresse: '101 Townsend St., San Francisco, CA 94107, États-Unis',
    site: 'https://www.cloudflare.com',
  },
  credits: {
    graphisme: 'Annabelle Caley',
    site: 'Ludovic Bodin',
  },
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
