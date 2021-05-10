export default {
  name: "instruction",
  title: "Instruction",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
