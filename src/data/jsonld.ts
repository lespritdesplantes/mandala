import { SITE } from './site';

// Données structurées schema.org de l'entreprise, partagées entre les pages.
export const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#entreprise`,
  name: SITE.nom,
  description: SITE.description,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/logo.png`,
  email: SITE.email,
  vatID: SITE.tva,
  founder: { '@type': 'Person', name: SITE.productrice },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.adresse.rue,
    addressLocality: SITE.adresse.commune,
    postalCode: SITE.adresse.codePostal,
    addressRegion: SITE.adresse.region,
    addressCountry: SITE.adresse.pays,
  },
};
