import { createClient } from "@sanity/client";

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error("Set SANITY_TOKEN before running: SANITY_TOKEN=xxx node scripts/seed.mjs");
  console.error("Create a token at: https://sanity.io/manage → priyanka-personal-website → API → Tokens → Add API token (Editor role)");
  process.exit(1);
}

const client = createClient({
  projectId: "wb24ea22",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const tx = client.transaction();

// Site Settings (singleton)
tx.createOrReplace({
  _id: "siteSettings",
  _type: "siteSettings",
  name: "Priyanka Navle",
  headline: "Building bridges between governments, <em>industry, and people.</em>",
  bio: "I'm Priyanka, a public policy professional with 8+ years navigating the intersection of gender & development, education, participatory governance, and technology. Currently at Cloudflare, building government affairs for the GCC in Bengaluru. Previously at Uber for 5+ years, leading regulatory work across South India and driving the Future of Work agenda for India & South Asia.",
  currentRole: "Sr. Manager, Govt. Relations",
  currentCompany: "Cloudflare",
  location: "Bengaluru, India",
  email: "hello@priyankanavle.com",
  linkedInUrl: "https://www.linkedin.com/in/priyankanavle/",
  twitterHandle: "@priyankanavle",
});

// Focus Areas
for (const fa of [
  { _id: "focusArea-01", number: "01", title: "Technology & AI Policy", description: "Shaping policy frameworks that balance innovation with ethical oversight — from AI regulation to digital infrastructure and platform governance.", order: 1 },
  { _id: "focusArea-02", number: "02", title: "Future of Work", description: "Designing systems that protect and empower workers in the gig economy, leading Uber's Work Policy charter across India and South Asia.", order: 2 },
  { _id: "focusArea-03", number: "03", title: "Gender & Development", description: "Advancing inclusive growth through policy, from grassroots education programs to working with the UN Population Fund on gender institutions.", order: 3 },
]) {
  tx.createOrReplace({ ...fa, _type: "focusArea" });
}

// Experience — field names: jobTitle, organisation, location, tag, startDate, endDate, description, order
for (const exp of [
  { _id: "exp-cloudflare", jobTitle: "Senior Manager – Government Relations, GCC", organisation: "Cloudflare", location: "Bengaluru, India", tag: "Current Role", startDate: "Jul 2025", endDate: "Present", description: "Building Cloudflare's government affairs function in India, with a focus on advancing the Global Capability Center in Bengaluru. Focus areas include AI policy, regulatory engagement, and shaping the policy environment for Cloudflare's India operations.", order: 1 },
  { _id: "exp-uber", jobTitle: "Public Policy Lead", organisation: "Uber", location: "South India & Sri Lanka", tag: "5 yrs 8 mos", startDate: "Dec 2019", endDate: "Jul 2025", description: "Head of Government Relations for South India and Head of Work Policy for India, leading regulatory affairs and the Future of Work charter for India South Asia.", order: 2 },
  { _id: "exp-mcc", jobTitle: "Lecturer", organisation: "Mount Carmel College", location: "Bengaluru", tag: "Education", startDate: "Jul 2019", endDate: "Oct 2019", description: "Designed and established the Participatory Democracy Fellowship in collaboration with B.PAC for graduate Public Policy students.", order: 3 },
  { _id: "exp-kshamtalaya", jobTitle: "Program Manager", organisation: "Kshamtalaya Foundation", location: "Karnataka", tag: "Development", startDate: "Nov 2017", endDate: "May 2019", description: "Launched and led a self-organised learning programme reaching 1,200+ primary school students across six villages in rural Karnataka.", order: 4 },
]) {
  tx.createOrReplace({ ...exp, _type: "experience" });
}

// Posts — field names: title, slug, readTime, excerpt, published
for (const post of [
  { _id: "post-01", title: "What it actually takes to change policy from the inside", slug: { _type: "slug", current: "what-it-takes-to-change-policy" }, readTime: 8, excerpt: "Eight years of navigating governments, unions, and civil society. What I've learned about how real change happens.", published: false },
  { _id: "post-02", title: "The Future of Work isn't just about jobs — it's about dignity", slug: { _type: "slug", current: "future-of-work-dignity" }, readTime: 6, excerpt: "Reflections from leading Uber's work policy charter and what platform workers in India actually need.", published: false },
  { _id: "post-03", title: "Why I left academia for policy — and what I brought with me", slug: { _type: "slug", current: "why-i-left-academia-for-policy" }, readTime: 5, excerpt: "On participatory governance and why being close to the ground matters more than being close to power.", published: false },
]) {
  tx.createOrReplace({ ...post, _type: "post" });
}

// Books — field names: title, author, personalNote, order
for (const book of [
  { _id: "book-01", title: "Seeing Like a State", author: "James C. Scott", personalNote: "Essential for anyone in policy. Changes how you think about top-down planning.", order: 1 },
  { _id: "book-02", title: "The Entrepreneurial State", author: "Mariana Mazzucato", personalNote: "A powerful reframe of the state's role in innovation.", order: 2 },
  { _id: "book-03", title: "Doughnut Economics", author: "Kate Raworth", personalNote: "A new lens for thinking about growth and wellbeing.", order: 3 },
  { _id: "book-04", title: "The Ministry for the Future", author: "Kim Stanley Robinson", personalNote: "Fiction that thinks harder about climate than most non-fiction.", order: 4 },
]) {
  tx.createOrReplace({ ...book, _type: "book" });
}

// Tools — field names: name, category, description, order
for (const tool of [
  { _id: "tool-prs", name: "PRS India", category: "Research & Policy", description: "My go-to for tracking legislation, bills, and parliamentary activity.", order: 1 },
  { _id: "tool-elicit", name: "Elicit", category: "Research & Policy", description: "AI-assisted literature review, genuinely useful for policy research.", order: 2 },
  { _id: "tool-zotero", name: "Zotero", category: "Research & Policy", description: "Reference management for keeping research organised across projects.", order: 3 },
  { _id: "tool-notion", name: "Notion", category: "Writing & Thinking", description: "Second brain: notes, drafts, meeting prep, project tracking.", order: 4 },
  { _id: "tool-gdocs", name: "Google Docs", category: "Writing & Thinking", description: "Still the best for collaborative drafting and stakeholder documents.", order: 5 },
  { _id: "tool-iawriter", name: "iA Writer", category: "Writing & Thinking", description: "Distraction-free when I need to actually finish something.", order: 6 },
  { _id: "tool-readwise", name: "Readwise Reader", category: "Staying Informed", description: "Where I send everything worth reading. Highlights sync automatically.", order: 7 },
  { _id: "tool-substack", name: "Substack", category: "Staying Informed", description: "Policy, governance, and tech regulation newsletters.", order: 8 },
]) {
  tx.createOrReplace({ ...tool, _type: "tool" });
}

console.log("Seeding Sanity with mockup content...");
tx.commit()
  .then(() => console.log("✓ Done! All content written to Sanity."))
  .catch((err) => { console.error("Error:", err.message); process.exit(1); });
