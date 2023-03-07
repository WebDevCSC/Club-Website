export default {
  name: "instagram",
  title: "Instagram",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
