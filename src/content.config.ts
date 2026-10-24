import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const SLUGS_GAMMES = [
  'alcoolatures',
  'baumes',
  'huiles-de-massage',
  'encens',
  'batons-de-fumigation',
  'porte-encens',
] as const;

// Une valeur marquée aConfirmer s'affiche avec un badge « À CONFIRMER »
// et n'est pas reprise dans les données structurées.
const prix = z.object({
  libelle: z.string(),
  montant: z.number(),
  aConfirmer: z.boolean().default(false),
});

const gammes = defineCollection({
  loader: glob({ base: './src/content/gammes', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      nom: z.string(),
      ordre: z.number(),
      /** Phrase courte pour les cartes et la meta description */
      accroche: z.string(),
      photo: image(),
      photoAlt: z.string(),
      /** Identifiant dans REFORMULATIONS.md si une partie de l'intro attend validation */
      reformulation: z.string().optional(),
      /** Modes d'emploi communs à la gamme (encens) */
      formats: z
        .array(z.object({ nom: z.string(), contenu: z.string(), modeEmploi: z.string() }))
        .optional(),
      aConfirmer: z.array(z.string()).default([]),
    }),
});

const produits = defineCollection({
  loader: glob({ base: './src/content/produits', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      nom: z.string(),
      nomLatin: z.string().optional(),
      gamme: z.enum(SLUGS_GAMMES),
      ordre: z.number(),
      /** Surnom ou ambiance, affiché sous le nom */
      accroche: z.string().optional(),
      prix: z.array(prix).min(1),
      partieUtilisee: z.string().optional(),
      composition: z.array(z.string()).optional(),
      compositionAConfirmer: z.boolean().default(false),
      /**
       * Usages / description à visée bien-être. Laissé vide tant que la
       * reformulation n'est pas validée : la page affiche alors un encart d'attente.
       */
      usage: z.string().optional(),
      reformulation: z.string().optional(),
      /** Présentation courte et neutre (tableau des usages et précautions) */
      resume: z.string().optional(),
      posologie: z.string().optional(),
      posologieAConfirmer: z.boolean().default(false),
      precautions: z.array(z.string()).default([]),
      usageExterne: z.boolean().default(false),
      modeEmploi: z.string().optional(),
      aConfirmer: z.array(z.string()).default([]),
      photos: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    }),
});

export const collections = { gammes, produits };
