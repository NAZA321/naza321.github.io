import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

// 単一ファイル(src/content/news/news.md)のfrontmatterに項目を配列で持たせて管理する。
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    items: z.array(
      z.object({
        date: z.coerce.date(),
        text: z.string(),
        link: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { posts, news };
