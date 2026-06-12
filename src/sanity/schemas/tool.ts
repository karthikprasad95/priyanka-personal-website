import { defineType, defineField } from "sanity";

export const tool = defineType({
  name: "tool",
  title: "Tool",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", description: 'e.g. Research & Policy, Writing & Thinking, Staying Informed' }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "category" } },
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
