import { defineField, defineType } from "sanity";

export const content = defineType({
  name: "content",
  title: "Content",
  type: "document",
  fields: [
    defineField({
      name: "newsdate",
      title: "Latest News Date",
      type: "string",
    }),
    {
      name: "news",
      title: "Latest News",
      type: "string",
    },
    {
      name: "popup",
      title: "Popup information",
      type: "string",
    },
    {
      name: "showpopup",
      title: "Show popup",
      type: "boolean",
    },
  ],
});
