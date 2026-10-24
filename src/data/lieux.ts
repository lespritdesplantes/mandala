// Lieux de vente (source : sources/lieux de vente.odt et FLYER 2026.pdf).
// Les événements datés sont masqués automatiquement une fois passés :
// au build, puis côté navigateur entre deux builds (voir /ou-nous-trouver/).

export interface Boutique {
  nom: string;
  type: string;
  villes: string;
}

export interface MarcheRegulier {
  nom: string;
  lieu: string;
  frequence: string;
  horaires?: string;
}

export interface Evenement {
  nom: string;
  description?: string;
  lieu: string;
  ville: string;
  departement: string;
  /** Dates au format AAAA-MM-JJ ; fin = début pour un événement d'un jour */
  debut: string;
  fin: string;
}

export const BOUTIQUES: Boutique[] = [
  { nom: 'La Tisanerie d’Oc', type: 'Herboristerie', villes: 'Rions et Bordeaux' },
  { nom: 'Aux herbes de St Jacques', type: 'Herboristerie', villes: 'Pau' },
];

export const MARCHES: MarcheRegulier[] = [
  {
    nom: 'Joyeux Marché',
    lieu: 'Préchac (33)',
    frequence: 'Le premier dimanche du mois, d’avril à décembre',
    horaires: '9 h – 16 h',
  },
];

export const EVENEMENTS: Evenement[] = [
  {
    nom: 'R.A.D',
    description: 'Marché artisanal',
    lieu: 'Chantier Tramasset',
    ville: 'Le Tourne',
    departement: '33',
    debut: '2026-10-28',
    fin: '2026-10-28',
  },
  {
    nom: 'BLISS',
    description: 'Festival de yoga',
    lieu: 'Darwin',
    ville: 'Bordeaux',
    departement: '33',
    debut: '2026-11-13',
    fin: '2026-11-15',
  },
];

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
