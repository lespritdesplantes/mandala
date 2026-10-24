// Lieux de vente (source : sources/lieux de vente.odt, FLYER 2026.pdf et adresses transmises en octobre 2026).
// Les événements datés sont masqués automatiquement une fois passés :
// au build, puis côté navigateur entre deux builds (voir /ou-nous-trouver/).

export interface Adresse {
  /** Nom du lieu quand il fait partie de l'adresse (« Darwin », « Chantier Tramasset ») */
  lieu?: string;
  rue?: string;
  codePostal: string;
  ville: string;
  /** Précision affichée sous l'adresse, hors itinéraire */
  precision?: string;
}

export interface Boutique {
  nom: string;
  type: string;
  ville: string;
  adresse: Adresse;
  /** Téléphone de la boutique (jamais celui de Cécile) : affichage et format international pour tel: */
  telephone?: { affiche: string; international: string };
}

export interface MarcheRegulier {
  nom: string;
  adresse: Adresse;
  frequence: string;
  horaires?: string;
}

export interface Evenement {
  nom: string;
  description?: string;
  adresse: Adresse;
  /** Dates au format AAAA-MM-JJ ; fin = début pour un événement d'un jour */
  debut: string;
  fin: string;
}

export const BOUTIQUES: Boutique[] = [
  {
    nom: 'La Tisanerie d’Oc',
    type: 'Herboristerie',
    ville: 'Bordeaux',
    adresse: { rue: '48 rue Bouffard', codePostal: '33000', ville: 'Bordeaux' },
  },
  {
    nom: 'La Tisanerie d’Oc',
    type: 'Herboristerie',
    ville: 'Rions',
    adresse: { rue: '6 rue du Château', codePostal: '33410', ville: 'Rions' },
  },
  {
    nom: 'Aux Herbes de Saint-Jacques',
    type: 'Herboristerie',
    ville: 'Pau',
    adresse: {
      rue: '5 rue Tran',
      codePostal: '64000',
      ville: 'Pau',
      precision: 'Quartier du Hédas, centre-ville',
    },
    telephone: { affiche: '05 59 27 49 07', international: '+33559274907' },
  },
];

export const MARCHES: MarcheRegulier[] = [
  {
    nom: 'Joyeux Marché',
    adresse: { codePostal: '33730', ville: 'Préchac' },
    frequence: 'Le premier dimanche du mois, d’avril à décembre',
    horaires: '9 h – 16 h',
  },
];

export const EVENEMENTS: Evenement[] = [
  {
    nom: 'R.A.D',
    description: 'Marché artisanal',
    adresse: { lieu: 'Chantier Tramasset', rue: 'esplanade Josselin', codePostal: '33550', ville: 'Le Tourne' },
    debut: '2026-10-28',
    fin: '2026-10-28',
  },
  {
    nom: 'BLISS',
    description: 'Festival de yoga',
    adresse: { lieu: 'Darwin', rue: '87 quai des Queyries', codePostal: '33100', ville: 'Bordeaux' },
    debut: '2026-11-13',
    fin: '2026-11-15',
  },
];

/** Adresse sur une ligne : « Darwin, 87 quai des Queyries, 33100 Bordeaux » */
export const adresseSurUneLigne = ({ lieu, rue, codePostal, ville }: Adresse) =>
  [lieu, rue, `${codePostal} ${ville}`].filter(Boolean).join(', ');

/** Itinéraire Google Maps (URL publique documentée, sans paramètre de suivi) */
export const urlItineraire = (adresse: Adresse) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(adresseSurUneLigne(adresse))}`;

/** Date du jour au format AAAA-MM-JJ, heure de Paris */
export function aujourdhui(date = new Date()) {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(date);
}

export const evenementsAVenir = (jour = aujourdhui()) =>
  EVENEMENTS.filter((e) => e.fin >= jour).sort((a, b) => a.debut.localeCompare(b.debut));

const formatJour = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const formatJourSansAnnee = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', timeZone: 'UTC' });
const formatJourSeul = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', timeZone: 'UTC' });

/** « 28 octobre 2026 » ou « du 13 au 15 novembre 2026 » */
export function formaterPeriode({ debut, fin }: Evenement) {
  const d = new Date(`${debut}T00:00:00Z`);
  const f = new Date(`${fin}T00:00:00Z`);
  if (debut === fin) return `le ${formatJour.format(d)}`;
  const memeMois = debut.slice(0, 7) === fin.slice(0, 7);
  return memeMois
    ? `du ${formatJourSeul.format(d)} au ${formatJour.format(f)}`
    : `du ${formatJourSansAnnee.format(d)} au ${formatJour.format(f)}`;
}
