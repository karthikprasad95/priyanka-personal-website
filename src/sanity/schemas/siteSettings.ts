import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "headline", title: "Hero Headline (supports <em> tags)", type: "text", rows: 2 }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "currentRole", title: "Current Job Title", type: "string" }),
    defineField({ name: "currentCompany", title: "Current Company", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "linkedInUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "twitterHandle", title: "Twitter Handle", type: "string", description: 'e.g. @priyankanavle' }),
  ],
  preview: { select: { title: "name" } },
});
