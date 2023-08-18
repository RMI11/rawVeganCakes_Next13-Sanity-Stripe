import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Products",
  type: "document",
  initialValue: {
    newproduct: true,
    bestseller: false,
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "id",
      title: "id",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Chocolate cakes", value: "Chocolate cakes" },
          { title: "Fruit cakes", value: "Fruit cakes" },
          { title: "Coffee cakes", value: "Coffee cakes" },
          { title: "Breakfast bars", value: "Breakfast bars" },
          { title: "Energy bites", value: "Energy bites" },
          { title: "Chocolate bars", value: "Chocolate bars" },
        ],
      },
    },
    {
      name: "newproduct",
      title: "New Product",
      type: "boolean",
    },
    {
      name: "bestseller",
      title: "Best Seller",
      type: "boolean",
    },
    {
      name: "recommended",
      title: "Recommended",
      type: "boolean",
    },
    {
      name: "size",
      title: "Size",
      type: "string",
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
});
