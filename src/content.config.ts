import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		author: z.string().optional(),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		canonicalUrl: z.string().url().optional(),
	}),
});

export const collections = {
	blog,
};

