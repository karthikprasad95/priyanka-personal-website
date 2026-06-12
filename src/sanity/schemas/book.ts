import { defineType, defineField } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author", type: "string", validation: (r) => r.required() }),
    defineField({ name: "cover", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "personalNote", title: "Personal Note", type: "text", rows: 2 }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "author", media: "cover" } },
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
