// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lespritdesplantes.org',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Polices auto-hébergées : fichiers woff2 (sous-ensemble latin) des paquets Fontsource,
  // copiés dans dist/ au build, avec préchargement et police de repli ajustée (moins de CLS).
  fonts: [
    {
      // Titres : manuscrite, proche du lettrage du logo
      provider: fontProviders.local(),
      name: 'Caveat',
      cssVariable: '--font-titre',
      fallbacks: ['cursive'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/caveat/files/caveat-latin-wght-normal.woff2'],
            weight: '400 700',
            style: 'normal',
          },
        ],
      },
    },
    {
      // Texte courant
      provider: fontProviders.local(),
      name: 'Nunito',
      cssVariable: '--font-texte',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2'],
            weight: '200 1000',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
