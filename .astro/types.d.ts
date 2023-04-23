declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"posts": {
"ar/post-1.md": {
  id: "ar/post-1.md",
  slug: "post-1",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-10.md": {
  id: "ar/post-10.md",
  slug: "post-10",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-11.md": {
  id: "ar/post-11.md",
  slug: "post-11",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-12.md": {
  id: "ar/post-12.md",
  slug: "post-12",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-13.md": {
  id: "ar/post-13.md",
  slug: "post-13",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-14.md": {
  id: "ar/post-14.md",
  slug: "post-14",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-15.md": {
  id: "ar/post-15.md",
  slug: "post-15",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-16.md": {
  id: "ar/post-16.md",
  slug: "post-16",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-17.md": {
  id: "ar/post-17.md",
  slug: "post-17",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-18.md": {
  id: "ar/post-18.md",
  slug: "post-18",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-19.md": {
  id: "ar/post-19.md",
  slug: "post-19",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-2.md": {
  id: "ar/post-2.md",
  slug: "post-2",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-20.md": {
  id: "ar/post-20.md",
  slug: "post-20",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-3.md": {
  id: "ar/post-3.md",
  slug: "post-3",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-4.md": {
  id: "ar/post-4.md",
  slug: "post-4",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-5.md": {
  id: "ar/post-5.md",
  slug: "post-5",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-6.md": {
  id: "ar/post-6.md",
  slug: "post-6",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-7.md": {
  id: "ar/post-7.md",
  slug: "post-7",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-8.md": {
  id: "ar/post-8.md",
  slug: "post-8",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"ar/post-9.md": {
  id: "ar/post-9.md",
  slug: "post-9",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-1.md": {
  id: "en/post-1.md",
  slug: "post-1",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-10.md": {
  id: "en/post-10.md",
  slug: "post-10",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-11.md": {
  id: "en/post-11.md",
  slug: "post-11",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-12.md": {
  id: "en/post-12.md",
  slug: "post-12",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-13.md": {
  id: "en/post-13.md",
  slug: "post-13",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-14.md": {
  id: "en/post-14.md",
  slug: "post-14",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-15.md": {
  id: "en/post-15.md",
  slug: "post-15",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-16.md": {
  id: "en/post-16.md",
  slug: "post-16",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-17.md": {
  id: "en/post-17.md",
  slug: "post-17",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-18.md": {
  id: "en/post-18.md",
  slug: "post-18",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-19.md": {
  id: "en/post-19.md",
  slug: "post-19",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-2.md": {
  id: "en/post-2.md",
  slug: "post-2",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-20.md": {
  id: "en/post-20.md",
  slug: "post-20",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-21.md": {
  id: "en/post-21.md",
  slug: "post-21",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-22.md": {
  id: "en/post-22.md",
  slug: "post-22",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-3.md": {
  id: "en/post-3.md",
  slug: "post-2",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-4.md": {
  id: "en/post-4.md",
  slug: "post-4",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-5.md": {
  id: "en/post-5.md",
  slug: "post-5",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-6.md": {
  id: "en/post-6.md",
  slug: "post-6",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-7.md": {
  id: "en/post-7.md",
  slug: "post-7",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-8.md": {
  id: "en/post-8.md",
  slug: "post-8",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
"en/post-9.md": {
  id: "en/post-9.md",
  slug: "post-9",
  body: string,
  collection: "posts",
  data: any
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = never;
}
