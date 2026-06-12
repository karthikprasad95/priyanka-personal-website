import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "publishedAt", title: "Published At", type: "date" }),
    defineField({ name: "readTime", title: "Read Time (minutes)", type: "number" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "mainImage" } },
  orderings: [{ title: "Newest First", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});
