import { getCollection, type CollectionEntry } from 'astro:content';

export type Produit = CollectionEntry<'produits'>;
export type Gamme = CollectionEntry<'gammes'>;

/** « alcoolatures/tulsi » → « tulsi » */
export const slugProduit = (produit: Produit) => produit.id.split('/').pop()!;

export const urlGamme = (gamme: string) => `/produits/${gamme}/`;
export const urlProduit = (produit: Produit) => `/produits/${produit.data.gamme}/${slugProduit(produit)}/`;

export async function gammesTriees() {
  return (await getCollection('gammes')).sort((a, b) => a.data.ordre - b.data.ordre);
}

export async function produitsDeLaGamme(gamme: string) {
  return (await getCollection('produits', ({ data }) => data.gamme === gamme)).sort(
    (a, b) => a.data.ordre - b.data.ordre,
  );
}

const euros = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
export const formaterPrix = (montant: number) => euros.format(montant).replace(',00', '');

/** Prix le plus bas, pour les cartes (« à partir de ») */
export function prixMinimum(produit: Produit) {
  return Math.min(...produit.data.prix.map((p) => p.montant));
}

/** Vrai si au moins un élément de la fiche reste à confirmer */
export function aDesPointsAConfirmer(produit: Produit) {
  const d = produit.data;
  return (
    d.aConfirmer.length > 0 ||
    d.compositionAConfirmer ||
    d.posologieAConfirmer ||
    d.prix.some((p) => p.aConfirmer) ||
    (!!d.reformulation && !d.usage)
  );
}
