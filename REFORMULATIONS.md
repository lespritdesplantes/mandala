# Reformulations à valider

Ce fichier propose une reformulation de chaque texte des sources qui contient une allégation thérapeutique ou un terme exclu du site (« cicatrisant », « anti-inflammatoire »). **Seule la phrase de l'accueil (ACC-1) est intégrée au site**, car elle avait déjà été validée. Les autres textes ne sont pas publiés : à leur place, les pages produits affichent l'encart « Description en attente de validation » avec l'identifiant correspondant (ALC-1, HUI-2…).

**En production, en attendant la validation** : chaque fiche affiche une présentation neutre (plante, partie utilisée, origine, fabrication), sans allégation. Le bloc de précautions reste affiché. Les photos dont l'étiquette porte une allégation lisible sont retirées du site.

Pour valider une proposition, cocher la case ou la corriger directement dans ce fichier. Une fois la proposition validée, il suffit de reporter le texte dans le champ `usage` (ou dans le corps de la fiche) du fichier `src/content/produits/…` concerné.

Principes suivis :

- Formulations du type « traditionnellement utilisé(e) pour… », « contribue au bien-être… », « accompagne… ».
- On ne cite ni maladie, ni symptôme pathologique, ni mécanisme d'action : cystite, arthrose, tension, cholestérol, antiviral, dépression, sevrage, etc.
- On retire « adaptogène », dont l'allégation n'est pas autorisée en Europe.
- Les **précautions et contre-indications** issues du tableau sont conservées telles quelles sur les fiches. Ce sont des informations de sécurité, pas des allégations.
- Les mentions légales obligatoires d'un complément alimentaire sont ajoutées sur chaque fiche alcoolature : dose journalière, « ne se substitue pas à une alimentation variée », « tenir hors de portée des jeunes enfants ».

Sources : `Produits descriptif Alcoolature.odt`, `Produits huiles de massage.odt`, `Produits descriptif baumes.odt`, `Produits descriptif Encens.odt`, `FLYER 2026.pdf`, `Accueil.odt`.

---

## Accueil

### ACC-1 — Paragraphe d'introduction ✅ validé et intégré

| Avant | Après |
|---|---|
| … valorisant ainsi ce que la nature nous offre **pour préserver une bonne santé physique, émotionnelle, énergétique et mentale**. | … valorisant ainsi ce que la nature nous offre **pour accompagner le bien-être physique, émotionnel, énergétique et mental**. |

---

## Alcoolatures

### ALC-0 — Introduction de la gamme

| Avant | Après |
|---|---|
| Immédiatement mises à macérer après récolte, **tous les principes actifs** extraits de la plante (feuille, fleur ou racine) **sont intacts** dans la solution hydro-alcoolique. | Immédiatement mises à macérer après récolte, les plantes (feuille, fleur ou racine) livrent toute leur richesse à la solution hydro-alcoolique. |
| De nombreux ouvrages en phytothérapie existent, vous pouvez également consulter PUBMED, où vous trouverez des publications scientifiques de la recherche médicale. | *(supprimé)* — ou remplacé par la bibliographie du tableau sur la page Usages et précautions. |

> **Pourquoi** : « principes actifs » relève du vocabulaire du médicament. Renvoyer vers la recherche médicale pour un complément alimentaire revient à une allégation indirecte.
>
> Le reste de l'introduction est publié tel quel (coquilles corrigées), car il ne contient pas d'allégation : conservation, dilution, cures de 21 jours, « Les plantes peuvent aider, mais elles ne font pas tout ! ».

- [ ] Validé

### ALC-1 — Achillée millefeuille (*Achillea millefolium*)

| Avant | Après |
|---|---|
| Plante souveraine, elle agit sur la sphère gynécologique : régule le cycle menstruel, apaise les règles douloureuses, syndrome prémenstruel et ménopause. Circulatoire (jambes lourdes, varices). | Plante souveraine, surnommée « herbe aux charpentiers », l'achillée millefeuille est traditionnellement utilisée pour accompagner le confort féminin, au fil du cycle comme au moment de la ménopause. Elle est aussi traditionnellement associée au confort circulatoire, notamment en cas de sensation de jambes lourdes. |

> Retiré : « agit », « régule », « règles douloureuses », « syndrome prémenstruel », « varices ». Le surnom « herbe aux charpentiers » vient de l'étiquette.

- [ ] Validé

### ALC-2 — Ashwagandha (*Withania somnifera*)

| Avant | Après |
|---|---|
| Traditionnellement utilisé dans la pharmacopée ayurvédique. Agit sur l'organisme dans son ensemble : améliore la force physique, mentale et émotionnelle. Plante adaptogène, elle aide à lutter contre le stress, l'anxiété, le burn-out et les états dépressifs. Elle augmente l'énergie vitale, la concentration, et est aphrodisiaque. | Plante majeure de la tradition ayurvédique, où on la surnomme « ginseng indien », l'ashwagandha y est traditionnellement utilisée pour soutenir la vitalité physique et mentale. Elle contribue au bien-être en période de fatigue ou de tension nerveuse, et accompagne l'équilibre émotionnel au quotidien. |

> Retiré : « adaptogène », « anxiété », « burn-out », « états dépressifs », « aphrodisiaque », « améliore la concentration ». Le surnom « ginseng indien » vient de l'étiquette.

- [ ] Validé

### ALC-3 — Jiaogulan (*Gynostemma pentaphyllum*)

| Avant | Après |
|---|---|
| Traditionnellement utilisée dans la pharmacopée chinoise pour ses propriétés anti-oxydantes puissantes, on la nomme aussi « thé de l'immortalité ». Adaptogène, elle aide à lutter contre le stress physique et psychique. Aussi appelée « ginseng des femmes » parce qu'elle équilibre la sphère hormonale pendant les périodes de préménopause et ménopause. | Traditionnellement utilisé dans la pharmacopée chinoise, où on le nomme « thé de l'immortalité », le jiaogulan est aussi appelé « ginseng des femmes ». Il est traditionnellement utilisé pour accompagner la vitalité face aux tensions du quotidien, et le bien-être féminin pendant la période de la ménopause. |

> Retiré : « propriétés anti-oxydantes puissantes », « adaptogène », « équilibre la sphère hormonale ».

- [ ] Validé

### ALC-4 — Pavot de Californie (*Eschscholzia californica*)

| Avant | Après |
|---|---|
| Ce joli coquelicot orange est allié de choix pour faciliter le sommeil, réduire le stress, angoisse, insomnies, sevrages des somnifères conventionnels (consulter votre médecin). | Ce joli coquelicot orange est traditionnellement utilisé pour favoriser la détente du soir et contribuer à un sommeil de qualité. |
| *(tableau, précautions)* Désaccoutumance d'un somnifère : sous suivi médical. | Si vous suivez un traitement, notamment pour le sommeil, ne le modifiez pas sans l'avis de votre médecin. |

> Retiré : « angoisse », « insomnies », « sevrage des somnifères ». La mention sur les somnifères devient une précaution, sans promesse.

- [ ] Validé

### ALC-5 — Tulsi (*Ocimum sanctum*)

| Avant | Après |
|---|---|
| Traditionnellement utilisé dans la pharmacopée ayurvédique, on l'appelle aussi « basilic sacré ». Adaptogène, elle est employée en cas de fatigue mentale et de stress. Régule la pression artérielle et le cholestérol. Système immunitaire et respiratoire : antivirale et antibactérienne, elle soulage les affections respiratoires. Soulage la sphère digestive : ballonnement, inflammation chronique. | Traditionnellement utilisé dans la pharmacopée ayurvédique, on l'appelle aussi « basilic sacré ». Il y est traditionnellement employé pour accompagner les périodes de fatigue mentale et de tension, ainsi que pour le confort digestif. |

> Retiré : « adaptogène », « pression artérielle », « cholestérol », « antivirale », « antibactérienne », « affections respiratoires », « inflammation chronique ».

- [ ] Validé

### ALC-6 — Consoude (*Symphytum officinale*) — usage externe

| Avant | Après |
|---|---|
| Comme son nom l'indique… cette plante aide à soulager les entorses, contusions, tendinites… à vaporiser sur la blessure, avant d'appliquer un onguent à l'arnica ou à l'hélichryse, de la gaulthérie, tea tree… | Comme son nom l'indique, la consoude est traditionnellement utilisée en application locale après les petits coups et faux mouvements. À vaporiser sur la zone concernée, avant un massage avec un baume ou une huile adaptés. |

> Retiré : « soulager », « entorses », « contusions », « tendinites ».
>
> **Deux questions à trancher** :
> 1. La source dit « vaporiser **sur la blessure** ». La consoude contient des alcaloïdes pyrrolizidiniques, et on déconseille généralement de l'appliquer sur une peau lésée. Faut-il ajouter « sur une peau non lésée » ?
> 2. Un produit à usage externe ne peut pas être vendu comme *complément alimentaire* : par définition, un complément alimentaire s'ingère. Il faut vérifier son statut (cosmétique ?) et son étiquetage.

- [ ] Validé

### ALC-7 — Genévrier (*Juniperus communis*)

| Avant | Après |
|---|---|
| Diurétique, dépurative, le genévrier agit sur la sphère urinaire (cystite) et ses propriétés anti-inflammatoires soulagent les douleurs rhumatismales, arthrite, arthrose. | Les baies de genévrier sont traditionnellement utilisées pour favoriser les fonctions d'élimination de l'organisme et accompagner le confort articulaire. |

> Retiré : « diurétique », « cystite », « anti-inflammatoire », « rhumatismes », « arthrite », « arthrose ». Les contre-indications (reins, grossesse) et la durée de cure sont conservées dans les précautions.

- [ ] Validé

### ALC-8 — Valériane (*Valeriana officinalis*)

| Avant | Après |
|---|---|
| Facilite l'endormissement, soulage la nervosité, les migraines, la tachycardie, réduit l'anxiété et les spasmes gastro-intestinaux. | La valériane est traditionnellement utilisée pour favoriser la détente et l'endormissement, et pour accompagner les périodes de nervosité. |

> Retiré : « migraines », « tachycardie », « anxiété », « spasmes ».

- [ ] Validé

### Armoise annuelle — exclue du site

Le flyer indique « Covid long, paludisme ». Cette alcoolature n'est publiée nulle part sur le site.

---

## Huiles de massage

### HUI-0 — Introduction de la gamme (flyer)

| Avant | Après |
|---|---|
| Le massage prépare et aide l'organisme à mieux s'adapter aux stress, soulager des douleurs ou des déséquilibres physiques, émotionnels, énergétiques. Ces macérats huileux sont confectionnés à base d'huiles végétales biologiques et de grande qualité. | Le massage est un moment de détente et d'attention à soi, pour le corps comme pour l'esprit. Ces macérats huileux sont confectionnés à base d'huiles végétales biologiques et de grande qualité. |

> La seconde phrase est déjà publiée. La première attend validation.

- [ ] Validé

### HUI-1 — Huile « Réparatrice » (amande douce, hélichryse)

| Avant | Après |
|---|---|
| Huile très douce, pour le visage, et le reste du corps, elle **répare les peaux abîmées** par le temps, et laisse une peau douce et délicatement parfumée. | Huile très douce, pour le visage et le reste du corps : elle nourrit les peaux marquées par le temps et laisse la peau douce et délicatement parfumée. |
| *(flyer)* Huile hydratante, adoucissante, réparatrice, antirides, **cicatrisante**, fluidifiante sanguine (jambes lourdes). | *(non repris)* |

> **Question** : le nom « Réparatrice », qui figure sur l'étiquette, est conservé sur le site. Faut-il le garder ?

- [ ] Validé

### HUI-2 — Huile « Décontractante » (chanvre, olive, romarin, genévrier, laurier)

| Avant | Après |
|---|---|
| Huile de massage qui **agit sur muscles et articulations, elle soulage les douleurs, contractures**, et pénètre très bien la peau. Son parfum est fruité et doux. | Huile de massage idéale après l'effort ou une journée physique : elle accompagne la détente musculaire et pénètre très bien la peau. Son parfum est fruité et doux. |
| *(flyer)* Huile **anti-inflammatoire**, antalgique. Soulage muscles et articulations, lumbagos, crampes ; fluidifiante sanguine (jambes lourdes). | *(non repris)* |

- [ ] Validé

### HUI-3 — Huile « Apaisante » (amande douce, hélichryse, rose de Damas, marjolaine)

| Avant | Après |
|---|---|
| Cette huile parfumée nourrit et relaxe le corps et **apaise le mental** pour le massé et le masseur ! | Cette huile parfumée nourrit la peau et invite à la détente, pour le massé comme pour le masseur ! |
| *(flyer)* … calmante, réconfortante. Apaise le système nerveux, régénère le tissu cutané, antirides. | *(non repris)* |

- [ ] Validé

---

## Baumes

### BAU-1 — Nom du baume à l'hélichryse

| Avant | Après |
|---|---|
| Baume **cicatrisant** à l'hélichryse | Baume à l'hélichryse |

> Ce nom est déjà appliqué sur le site, puisque « cicatrisant » est exclu.
>
> ⚠️ **Les photos `baume-gros.jpg` et `baume-petit.jpg` montrent l'étiquette « Réparateur, cicatrisant »**, que l'on peut lire. Faut-il garder ces photos telles quelles, les recadrer ou les refaire avec une nouvelle étiquette ?

- [ ] Validé

### BAU-2 — Baume à lèvres

| Avant | Après |
|---|---|
| Baume à lèvres : **réparateur**/hydratant | Baume à lèvres : nourrissant et protecteur |

> L'étiquette indique « Hydratant, protecteur, réparateur ».

- [ ] Validé

---

## Encens

### ENC-1 — Eucalyptus – Pin

| Avant | Après |
|---|---|
| **Anti-microbien** – Respiration – Fraîcheur. Parfum frais, **purifiant**. | Respiration – Fraîcheur. Parfum frais et vivifiant. |
| *(flyer)* … on l'utilise en période hivernale, pour dégager les bronches. **Antiseptique**, rafraîchissant et assainissant. | *(non repris)* |

> ⚠️ L'étiquette visible sur les photos indique « Antimicrobien, Respiration, Fraîcheur ».

- [ ] Validé

### ENC-2 — Hélichryse – Pin

| Avant | Après |
|---|---|
| Parfum épicé, aux embruns d'horizon et **de guérison**. | Parfum épicé, aux embruns d'horizon et de renouveau. |

> ⚠️ L'étiquette visible sur les photos indique « Inspiration, Créativité, **Guérison** ».

- [ ] Validé

### ENC-0 — Flyer, texte général sur l'encens (non repris sur le site)

| Avant | Après |
|---|---|
| … des soins énergétiques… Il **désinfecte l'air**, crée une ambiance, parfume un espace. | … des soins énergétiques… Il crée une ambiance et parfume un espace. |

> Ce texte n'est pas utilisé sur le site pour l'instant. La proposition sert surtout à la prochaine version du flyer.

- [ ] Validé

---

## Bâtons de fumigation

### FUM-1 — Introduction de la gamme

| Avant | Après |
|---|---|
| Aussi appelés sahumerios en Amérique latine, **un mélange entre fumée et santé**, les bâtons de fumigation de plantes permettent d'**assainir** des lieux, de faire un nettoyage énergétique, dans votre habitation, votre lieu de travail, ou pour un rituel ou une cérémonie en extérieur. | Appelés sahumerios en Amérique latine, les bâtons de fumigation de plantes accompagnent le nettoyage énergétique de votre habitation, de votre lieu de travail, ou un rituel, une cérémonie en extérieur. |

> Les consignes de sécurité (coupelle, aération, risque d'incendie) sont publiées telles quelles.

- [ ] Validé

---

## Photos dont les étiquettes portent des allégations lisibles

Ces photos ne sont pas retouchées. Elles sont **toutes retirées du site** en attendant une décision : faut-il les recadrer, les refaire, ou les republier une fois les étiquettes changées ?

| Photo | Texte lisible | Utilisation actuelle |
|---|---|---|
| `alcoolatures/alcoolatures-stand.jpg` | « adaptogène », « stress chronique », « système immunitaire », « angoisse »… | **retirée** du site (remplacée par la photo du tulsi) |
| `baumes/baume-gros.jpg`, `baume-petit.jpg` | « cicatrisant » | **retirées** (remplacées par des photos d'hélichryse et de macérat) |
| `encens/*eucalyptus*` (sauf `barette-qui-fume.jpg`) | « Antimicrobien » | **retirées** |
| `encens/*helichryse*` | « Guérison » | **retirées** (remplacées par la cueillette d'hélichryse) |
| `encens/batons-bambou-tous.jpg` | étiquettes des quatre parfums | **retirée** (photo de gamme remplacée) |

## Reste à faire

- **Tableau « Usages et précautions »** (`tableau alcoolature version2.pdf`) : la colonne « usages traditionnels » contient les mêmes allégations : anxiolytique, cholestérol, cystites, fractures, aide au sevrage… Il faudra la reformuler avant de publier la page `/usages-et-precautions/` et le PDF à télécharger.
- **Étiquettes et flyer** : ils contiennent eux aussi des allégations. C'est hors du périmètre du site, mais à signaler.
