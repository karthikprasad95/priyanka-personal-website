import { defineType, defineField } from "sanity";

export const focusArea = defineType({
  name: "focusArea",
  title: "Focus Area",
  type: "document",
  fields: [
    defineField({ name: "number", title: "Display Number", type: "string", description: 'e.g. 01, 02, 03' }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "number" } },
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
