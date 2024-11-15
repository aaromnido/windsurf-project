import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['Tesla', 'Volkswagen', 'Hyundai', 'KIA', 'Noticias', 'Pruebas', 'Guías']),
    author: z.string().default('EVCars'),
    tags: z.array(z.string()).default(['Noticias']),
  }),
});

export const collections = { noticias };
