// 1. Importar tus utilidades y esquemas
import { defineCollection } from 'astro:content';
import { blogSchema, experienceSchema } from '../schemas/schemas';

const blogCollection = defineCollection({
    type: 'content',
    schema: blogSchema
})

const experienceCollection = defineCollection({
    type: 'content',
    schema: experienceSchema
})

export const collections = {
    blog: blogCollection,
    experiences: experienceCollection
}