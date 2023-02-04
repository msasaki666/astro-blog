import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    requiredValue: z.string(),
  }),
});

const pageCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  // キーをcollectionのディレクトリ名と合わせる
  posts: postCollection,
  pages: pageCollection,
};
