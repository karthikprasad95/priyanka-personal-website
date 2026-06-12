import { defineType, defineField } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "jobTitle", title: "Job Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "organisation", title: "Organisation", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "tag", title: "Tag", type: "string", description: 'e.g. Current Role, 5 yrs 8 mos, Education' }),
    defineField({ name: "startDate", title: "Start Date", type: "string", description: 'e.g. Jul 2025' }),
    defineField({ name: "endDate", title: "End Date", type: "string", description: 'e.g. Present or Jul 2025' }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: { select: { title: "jobTitle", subtitle: "organisation" } },
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
