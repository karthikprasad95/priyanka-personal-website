import { siteSettings } from "./schemas/siteSettings";
import { focusArea } from "./schemas/focusArea";
import { experience } from "./schemas/experience";
import { post } from "./schemas/post";
import { book } from "./schemas/book";
import { tool } from "./schemas/tool";

export const schema = {
  types: [siteSettings, focusArea, experience, post, book, tool],
};
