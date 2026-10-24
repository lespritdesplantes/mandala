# Site « Mandala – L'esprit des plantes »

Site vitrine de la ferme de Cécile Anselmino (Saint-Loubert, 33) : production biologique de plantes aromatiques et médicinales (PPAM), cueillette sauvage, transformation artisanale.

- Domaine : **lespritdesplantes.org**, en ligne (registrar OVH, DNS chez Cloudflare, domaine branché sur le Worker).
- Hébergement : **Cloudflare Worker avec Static Assets**, Worker `mandala-web` configuré dans `wrangler.jsonc`. Ce n'est **pas** Cloudflare Pages. Chaque push sur `main` déclenche un build Cloudflare (`npm run build`), puis le Worker sert `dist/`. Le déploiement prend environ 1 à 2 minutes.
- Dépôt GitHub **public** : `lespritdesplantes/mandala`.
- Langue : français uniquement.

## État du projet (au 24 octobre 2026)

**En ligne** (35 pages) : accueil, `/produits/` avec 6 gammes et 21 fiches, `/usages-et-precautions/`, `/jardin-et-atelier/`, `/ou-nous-trouver/`, `/contact/`, `/mentions-legales/` et la page 404.

**Pas encore fait** : les vidéos de la galerie (pas d'hébergement choisi, composant `<Video>` à créer), un formulaire de contact, la mesure d'audience, et un audit Lighthouse complet.

### Décisions prises (ne pas revenir dessus sans demander)

- **PDF « usages et précautions » non publié** : il contient les anciennes allégations. La page `/usages-et-precautions/` est un tableau HTML généré à partir des fiches alcoolatures.
- **Prix non confirmés** : la fiche affiche « Prix sur demande, voir sur les marchés », et la carte « Prix sur demande ». C'est le cas des huiles de massage et des encens.
- **Pas de téléphone publié** pour Cécile (ni dans le site, ni dans les données structurées).
- **Contact par `mailto:`** vers contact@lespritdesplantes.org, sans formulaire.
- **Armoise annuelle** (« Covid long, paludisme » sur le flyer) : exclue du site.
- **Photos dont l'étiquette porte une allégation lisible** (« cicatrisant », « Antimicrobien », « Guérison », étal d'alcoolatures) : retirées du site, sans retouche.
- **Événements passés** : masqués automatiquement, au build puis dans le navigateur entre deux builds.
- **Mentions légales** : directrice de la publication Cécile Anselmino ; crédits « logo et flyer : Annabelle Caley », « site : Ludovic Bodin ». L'adresse de l'hébergeur a été vérifiée sur cloudflare.com en octobre 2026. Le site ne pose aucun cookie : à garder vrai (attention aux options Cloudflare comme Bot Fight Mode).
- **Historique Git nettoyé** avant le premier push : il ne contient ni les photos originales ni les vidéos. Ne pas les réintroduire. Une branche **locale** `sauvegarde-avant-nettoyage` (jamais poussée) garde l'ancien historique ; elle peut être supprimée.

### `REFORMULATIONS.md`

Ce fichier regroupe les reformulations proposées (avant / après) pour chaque texte qui contenait une allégation thérapeutique ou un terme exclu. Chaque proposition a un identifiant :

| Identifiants | Textes concernés |
|---|---|
| ACC-1 | accueil (seul texte **validé et intégré**) |
| ALC-0 à ALC-8 | alcoolatures |
| HUI-0 à HUI-3 | huiles de massage |
| BAU-1, BAU-2 | baumes |
| ENC-0 à ENC-2 | encens |
| FUM-1 | bâtons de fumigation |

Il contient aussi la liste des photos retirées, et le reste à faire (tableau des usages, étiquettes, flyer).

En attendant la validation, chaque fiche affiche une **présentation neutre** (plante, partie utilisée, origine, fabrication). Une fois une reformulation validée par Cécile et Ludovic, on reporte le texte dans le champ `usage` de la fiche, on coche la case dans `REFORMULATIONS.md`, puis on lance `npm run verifier`.

### Contenus encore marqués « à confirmer »

Ces valeurs restent dans les fichiers de `src/content/`, mais ne s'affichent jamais (voir les règles plus bas).

| Fiche | Marqueur | Point en suspens |
|---|---|---|
| Huiles de massage (les 3) | `prix … aConfirmer: true` | 22 € (50 mL) et 40 € (100 mL) selon le descriptif, contre 16,50 € les 50 mL selon le flyer |
| Huiles de massage (les 3) | `compositionAConfirmer: true` | descriptif et flyer différents (sésame, calendula, lavande, laurier, amande vierge…) |
| Encens (les 4 parfums) | `prix … aConfirmer: true` | 12 € / 18 € / 30 € par boîte selon le descriptif, contre 9,50 € les 5 g selon le flyer |
| Bâton de fumigation | `compositionAConfirmer: true` | 7 plantes selon le descriptif, contre sauge, romarin et laurier selon le flyer (affiché : sauge, romarin) |
| Jiaogulan | `posologieAConfirmer: true` | « 90 gouttes 3 fois par jour », bien au-dessus des autres plantes |
| Consoude | `aConfirmer` | statut réglementaire (usage externe, donc pas un complément alimentaire) ; mention « peau non lésée » ; pas de photo |
| Genévrier | `aConfirmer` | absent du flyer 2026 : toujours disponible ? pas de photo |
| Valériane | `aConfirmer` | absente du tableau et du flyer ; partie utilisée et précautions inconnues ; pas de photo |
| Huile réparatrice | `aConfirmer` | garder le nom « Réparatrice » ? |
| Baume à l'hélichryse, encens Eucalyptus – Pin et Hélichryse – Pin | photos retirées | étiquettes avec allégation lisible |
| Porte-encens Fleur | `aConfirmer` | « Double feu » : second modèle ou sous-titre ? |
| Porte-encens Dragon | `aConfirmer` | « dragon » ou « licorne » ? |
| Toutes les fiches avec `reformulation:` | sans `usage` | en attente de validation dans `REFORMULATIONS.md` |

### Questions en attente côté Cécile

1. Valider ou corriger les reformulations de `REFORMULATIONS.md` (ALC, HUI, BAU, ENC, FUM).
2. Prix définitifs des huiles de massage (et existence du format 100 mL) et des encens (à la boîte ou au poids).
3. Compositions exactes des trois huiles et des bâtons de fumigation.
4. Posologie du jiaogulan.
5. Consoude : statut réglementaire et étiquetage (cosmétique ?), précaution « ne pas appliquer sur une peau lésée ».
6. Genévrier et valériane : toujours en vente ? Pour la valériane : partie utilisée et précautions.
7. Photos : flacons de consoude, genévrier et valériane à prendre. Photos des baumes et des encens Eucalyptus et Hélichryse à refaire ou à recadrer (étiquettes avec allégations).
8. Les étiquettes et le flyer contiennent aussi des allégations : à corriger lors de la prochaine impression (hors site).
9. Nom de l'huile « Réparatrice ». Porte-encens : « Double feu » et « dragon / licorne ».
10. La photo `achilee.jpeg` montre-t-elle de l'achillée ou de la valériane ? Dans la galerie, son `alt` reste neutre.
11. Lieux de vente : vente en ligne (rubrique vide), marché de Bazas (présent sur le flyer, absent de la page) et prochains événements.
12. Tableau des usages : nouvelle version sans allégations, pour un éventuel PDF.
13. Vidéos : choix de l'hébergement (Cloudflare Stream, R2 ou YouTube).
14. Téléphone : à publier un jour ou non.

## Branches et vérifications

- `main` = **production**. `preview` est tenue à jour avec `main` (avance rapide après chaque push).
- Avant chaque push : `npm run build && npm run check && npm run verifier`. Le script `scripts/verifier-dist.mjs` contrôle les liens internes et l'absence de « À CONFIRMER », des termes interdits et de l'ancien numéro de téléphone dans le HTML et le JS de `dist/`.

## Valeurs non validées : jamais publiques

Les points en suspens restent **marqués dans les fichiers de contenu**, mais ne s'affichent jamais :
- `aConfirmer: true` sur un prix : la fiche affiche « Prix sur demande, voir sur les marchés », et aucune offre n'apparaît dans les données structurées.
- `compositionAConfirmer: true` : seuls les ingrédients communs aux sources figurent dans `composition` ; les versions complètes sont notées dans `aConfirmer`.
- `posologieAConfirmer: true` : la fiche affiche « Posologie : nous consulter ».
- `reformulation: ALC-…` sans `usage` : le corps de la fiche est une présentation neutre. Le texte validé de `REFORMULATIONS.md` va dans `usage`.
- Liste `aConfirmer` : notes internes, jamais rendues.
- Photos à étiquette litigieuse : retirées, référence gardée en commentaire YAML dans la fiche.

## Stack

- **Astro 7** (sortie statique), sans framework JS lourd. Le JS se limite au menu mobile, à la visionneuse de la galerie et au masquage des événements passés.
- Content collections (`src/content.config.ts`) :
  - `gammes` : `src/content/gammes/*.md` ;
  - `produits` : `src/content/produits/<gamme>/<produit>.md`.
- Données partagées dans `src/data/` :
  - `site.ts` : infos légales, navigation ;
  - `jsonld.ts` : `LocalBusiness` ;
  - `lieux.ts` : boutiques, marchés, événements datés ;
  - `galerie.ts` : photos et `alt` de la galerie (le build échoue si une photo n'a pas de description).
- Images : `astro:assets` (WebP/AVIF, `srcset`, lazy-loading). Le héro de l'accueil utilise `<picture>` (paysage sur ordinateur, portrait sur mobile, `src/components/PictureDirection.astro`).
- Polices Caveat (titres) et Nunito (texte), auto-hébergées via l'API `fonts` d'Astro (fournisseur `local`, fichiers des paquets Fontsource).
- **Les vidéos ne vont pas dans Git** : Cloudflare Stream, R2 ou YouTube intégré, via un composant `<Video>` qui accepte une URL (à créer).
- Commandes :
  - `npm run dev`, `npm run build`, `npm run check` ;
  - `npm run verifier` (après le build) ;
  - `npm run photos` : convertit `sources/photos/` vers `src/assets/photos/` (slug ASCII, 2400 px max, EXIF nettoyé, doublons écartés, rangement portrait/paysage selon l'orientation réelle).
- Les URL inconnues renvoient `dist/404.html` (`not_found_handling: "404-page"`).

## Charte graphique (tirée du logo)

- Couleurs prélevées dans le logo (`sources/logo-mandala.png`), tokens dans `src/styles/global.css` :
  - encre `#022B42` : textes, titres, pied de page ;
  - ocre `#E3B43B` : accents, boutons, icônes ;
  - vert d'eau `#E4EEE6` : fonds de sections ;
  - blanc cassé `#FBFAF6` : fond principal ;
  - ocre foncé `#7C520A` : liens sur fond clair. L'ocre pur n'a pas le contraste AA en texte : ne jamais l'utiliser pour du texte sur fond clair.
- Titres en Caveat (manuscrite, proche du logo), texte en Nunito.
- L'ambiance est naturelle, artisanale et lumineuse. On évite le style « template corporate ».
- Effet de survol des photos : classe globale `.cadre-zoom` (zoom ×1,05 en 400 ms, cadre fixe, ombre, désactivé avec `prefers-reduced-motion`).

## Arborescence

- `/` : accueil (héro, « Du jardin au flacon », engagements Biologique, Éthique et Artisanal avec icônes SVG, mosaïque « Au fil des saisons », gammes, section Instagram « Suivez la ferme au fil des jours »)
- `/produits/` : vue d'ensemble des gammes
  - `/produits/<gamme>/` : alcoolatures, baumes, huiles-de-massage, encens, batons-de-fumigation, porte-encens
  - `/produits/<gamme>/<produit>/` : fiche produit
- `/usages-et-precautions/` : tableau des alcoolatures (cartes sur mobile), **sans PDF**
- `/jardin-et-atelier/` : galerie de 30 photos avec visionneuse accessible ; les vidéos viendront plus tard
- Visionneuse partagée (`src/components/Visionneuse.astro`, `<dialog>`, flèches, Échap, swipe) : galerie et toutes les photos des fiches produits, via les liens `a[data-visionneuse]`
- `/ou-nous-trouver/` : herboristeries (Bordeaux, Rions, Pau), Joyeux Marché de Préchac, événements datés ; adresses complètes et bouton « Itinéraire » vers Google Maps (`src/components/BoutonItineraire.astro`)
- `/contact/` : e-mail en `mailto:`
- `/mentions-legales/` : éditrice, SIREN, TVA, hébergeur, crédits, données personnelles

## Contenus sources

Les textes d'origine sont dans `sources/` (fichiers .odt et .pdf, versionnés). Les photos originales (`sources/photos/`) et les vidéos (`sources/vidéos/`) sont **hors de Git** (`.gitignore`). On ne versionne que les sorties de `npm run photos`.

| Dossier source | Usage |
|---|---|
| accueil présentation photos en paysage / portrait | photos de présentation (héro : photos du dossier jardin et atelier) |
| photos alcoolatures portrait | gamme alcoolatures |
| photos baumes | gamme baumes |
| photos huiles de massage portrait | gamme huiles |
| photos encens portrait | gamme encens |
| Baton de fumigation | gamme fumigation |
| photos porte encens portrait | gamme porte-encens |
| photos jardin atelier paysage / portrait | galerie et page jardin |

## Règles de contenu (IMPORTANT)

- Les alcoolatures sont des **compléments alimentaires**. **Aucune allégation thérapeutique** n'est permise (« soigne », « guérit », « soulage la cystite », « régule la tension », « antiviral », « sevrage », « dépression »…). On utilise des formulations comme « traditionnellement utilisée pour… », « contribue au bien-être… », « en accompagnement de… ». Toute reformulation sensible est signalée à Ludovic au lieu d'être tranchée seul, et ajoutée à `REFORMULATIONS.md`.
- « Cicatrisant » et « anti-inflammatoire » ne doivent jamais apparaître sur le site.
- Sur chaque page alcoolature, on affiche : contient de l'alcool, déconseillé aux femmes enceintes ou allaitantes et aux enfants, demander l'avis de son médecin en cas de traitement, ainsi que les mentions obligatoires d'un complément alimentaire. Le lien vers `/usages-et-precautions/` est systématique (`src/components/AvertissementAlcoolature.astro`).
- La consoude est **à usage externe uniquement**, et cela doit être mis en évidence (bandeau sur la fiche, pastille sur la carte et dans le tableau).
- On corrige les coquilles des sources (fuitée → fruitée, fatique → fatigue, Whitania → Withania, Absynthe → Absinthe, Pinus maritimus → Pinus pinaster, etc.) sans changer le sens.
- Les incohérences entre sources (prix, liste de plantes) ne sont **jamais tranchées seul** : il faut demander. En attendant, on applique les règles de masquage ci-dessus.
- Ne rien inventer : pas d'information absente des sources (codes postaux, ingrédients devinés sur une photo, horaires…).

## Qualité

- Mobile d'abord, accessibilité WCAG AA (contraste, `alt` sur toutes les photos, navigation au clavier).
- Lighthouse au-dessus de 90 partout.
- SEO : `title` et `description` par page, Open Graph avec image, `sitemap.xml`, données structurées `LocalBusiness`, `Product`, `BreadcrumbList`, `ItemList` et `Event`.
- **Réseaux sociaux : lien uniquement, jamais d'embed Meta** (ni widget, ni script, ni image chargée depuis Instagram ou Facebook). Compte Instagram : `SITE.instagram` dans `src/data/site.ts` (`@l.esprit.des.plantes_mandala`), repris dans `sameAs` du `LocalBusiness`. La mosaïque de l'accueil utilise nos propres photos, en lien vers le compte ; icône dans `src/components/IconeInstagram.astro` (pied de page, contact, accueil).
- Pas de cookies ni de traceurs tiers. Si une mesure d'audience est nécessaire, utiliser Cloudflare Web Analytics (et mettre à jour les mentions légales).
- Formulaire de contact : `mailto:` pour l'instant. Pour un vrai formulaire, il faudra ajouter un script au Worker (clé `main` dans `wrangler.jsonc`) avec envoi par e-mail. Les Pages Functions ne s'appliquent pas ici.
