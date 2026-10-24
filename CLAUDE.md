# Site « Mandala – L'esprit des plantes »

Site vitrine de la ferme de Cécile Anselmino (Saint-Loubert, 33) : production biologique de plantes aromatiques et médicinales (PPAM), cueillette sauvage, transformation artisanale.

- Domaine : lespritdesplantes.org (registrar OVH, DNS chez Cloudflare)
- Hébergement : Cloudflare Pages, déployé depuis ce dépôt GitHub (branche `main` = production)
- Langue : français uniquement

## Stack

- **Astro** (sortie statique), sans framework JS lourd. Du JS seulement si c'est nécessaire (menu mobile, galerie).
- Les produits sont des **content collections** Astro, un fichier Markdown par produit dans `src/content/produits/` : nom, nom latin, gamme, prix, contenance, description, photos.
- Les images passent par `astro:assets`, avec sortie WebP/AVIF, `srcset` responsive et lazy-loading.
- **Les vidéos ne vont pas dans Git** : Cloudflare Stream, R2 ou YouTube intégré. Il faut prévoir un composant `<Video>` qui accepte une URL.
- Commandes : `npm run dev`, `npm run build`. Le build Cloudflare Pages utilise `npm run build` et le dossier de sortie `dist`.

## Charte graphique (tirée du logo)

- Bleu nuit encre, environ `#1B3245`, pour les textes, les titres et le pied de page.
- Ocre doré, environ `#E3A93B`, pour les accents, les boutons et les liens.
- Vert d'eau pâle, environ `#E6F0EA`, pour les fonds de sections.
- Blanc cassé, environ `#FBFAF6`, pour le fond principal.
- Titres dans une police manuscrite proche du logo (Google Fonts, par exemple « Caveat » ou « Kalam »), texte courant en sans-serif lisible (par exemple « Nunito »). Les polices sont auto-hébergées.
- L'ambiance est naturelle, artisanale et lumineuse. On évite le style « template corporate ».
- Les couleurs exactes sont prélevées dans le logo (`sources/logo-mandala.png`) : encre `#022B42`, ocre `#E3B43B`, vert d'eau `#E4EEE6`, blanc cassé `#FBFAF6` ; ocre foncé `#7C520A` pour les liens sur fond clair (l'ocre pur n'a pas le contraste AA en texte). Tokens dans `src/styles/global.css`.
- Photos : `npm run photos` (script `scripts/preparer-photos.mjs`) convertit `sources/photos/` vers `src/assets/photos/` (slug ASCII, 2400 px max, EXIF nettoyé).

## Arborescence

- `/` : Accueil (texte « L'esprit des plantes », devise, valeurs Biologique, Éthique et Artisanal, photos du jardin)
- `/produits/` : vue d'ensemble des gammes
  - `/produits/alcoolatures/`
  - `/produits/baumes/`
  - `/produits/huiles-de-massage/`
  - `/produits/encens/`
  - `/produits/batons-de-fumigation/`
  - `/produits/porte-encens/`
- `/usages-et-precautions/` : tableau des alcoolatures en HTML responsive (cartes sur mobile), plus le PDF en téléchargement
- `/jardin-et-atelier/` : galerie photos et vidéos
- `/ou-nous-trouver/` : boutiques et marchés ou événements datés (les événements passés sont masqués automatiquement)
- `/contact/`
- `/mentions-legales/` : obligatoire (nom, adresse, SIRET, hébergeur Cloudflare, crédits : création graphique Annabelle Caley)

## Contenus sources

Les textes d'origine sont dans `sources/` (fichiers .odt et .pdf). Les photos sont dans `sources/photos/`, organisées ainsi :

| Dossier | Usage |
|---|---|
| accueil présentation photos en paysage / portrait | héro de l'accueil (paysage sur ordinateur, portrait sur mobile via `<picture>`) |
| photos alcoolatures portrait | gamme alcoolatures |
| photos baumes | gamme baumes |
| photos huiles de massage portrait | gamme huiles |
| photos encens portrait | gamme encens |
| Baton de fumigation | gamme fumigation |
| photos porte encens portrait | gamme porte-encens |
| photos jardin atelier paysage / portrait | galerie et page jardin |

Il faut renommer les fichiers en slug ASCII, sans espaces ni accents, et ne pas versionner les originaux lourds. On ne garde que les versions redimensionnées, avec un grand côté de 2400 px maximum.

## Règles de contenu (IMPORTANT)

- Les alcoolatures sont des **compléments alimentaires**. **Aucune allégation thérapeutique** n'est permise (« soigne », « guérit », « soulage la cystite », « régule la tension », « antiviral », « sevrage », « dépression »…). Il faut utiliser des formulations comme « traditionnellement utilisée pour… », « contribue au bien-être… », « en accompagnement de… ». Toute reformulation sensible est signalée à Ludovic au lieu d'être tranchée seul.
- Sur chaque page alcoolature, on affiche : contient de l'alcool, déconseillé aux femmes enceintes ou allaitantes et aux enfants, demander l'avis de son médecin en cas de traitement. Le lien vers `/usages-et-precautions/` est systématique.
- La consoude est **à usage externe uniquement**, et cela doit être mis en évidence.
- On corrige les coquilles des sources (fuitée → fruitée, fatique → fatigue, Whitania → Withania, Absynthe → Absinthe, etc.) sans changer le sens.
- Les incohérences entre sources (prix, liste de plantes) ne sont **jamais tranchées seul** : il faut demander.

## Qualité

- Mobile d'abord, accessibilité WCAG AA (contraste, `alt` sur toutes les photos, navigation au clavier).
- Lighthouse au-dessus de 90 partout.
- SEO : `title` et `description` par page, Open Graph avec image, `sitemap.xml`, données structurées `LocalBusiness` et `Product`.
- Pas de cookies ni de traceurs tiers. Si une mesure d'audience est nécessaire, utiliser Cloudflare Web Analytics.
- Formulaire de contact : Cloudflare Pages Functions avec envoi par e-mail, ou simple lien `mailto:` dans un premier temps.
