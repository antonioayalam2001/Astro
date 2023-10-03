import { z } from 'astro:content';

export const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    author : z.string(),
})

export const experienceSchema = z.object({
    title: z.string(),
    description: z.string(),
})