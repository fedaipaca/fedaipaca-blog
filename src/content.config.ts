import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        heroImage: image().optional(),
        image: z
            .object({
                src: z.string(),
                alt: z.string(),
            })
            .optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
