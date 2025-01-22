// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const odysseyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    // Add other frontmatter properties here if you need them later
  }),
});

export const collections = {
  odyssey: odysseyCollection,
};