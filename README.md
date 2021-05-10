## NOT SO SWEET

- Publish at [https://j33pan.github.io/not-so-sweet/](https://j33pan.github.io/not-so-sweet/)
- Using this app to keep track of my favourate cake receipes and learn React + Material UI. I want a cake, but not so sweet!!
- Data is stored in [Sanity Content Lake](https://www.sanity.io/docs/reference). Also integrated with [Edamam Receipe Search API](https://developer.edamam.com/edamam-docs-recipe-api) to get inspirations from receipes around the world XD
- This app is responsive.

#### Schema Design

```javascript
export default {
  name: "complexcake",
  title: "Complex Cake Receipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
      name: "desc",
      title: "Description",
      type: "string",
    },
    {
      name: "cakereceipe",
      title: "Cake receipe",
      type: "reference",
      to: [{ type: "cakereceipe" }],
    },
    {
      name: "frostingreceipe",
      title: "Frosting receipe",
      type: "reference",
      to: [{ type: "frostingreceipe" }],
    },
  ],
  // preview: {
  //   select: { title: 'name', media: 'image' },
  // },
};

export default {
  name: "cakereceipe",
  title: "Cake Receipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "line",
      title: "Line",
      type: "array",
      of: [{ type: "line" }],
    },
    {
      name: "makesnum",
      Title: "Makes num",
      type: "number",
    },
    {
      name: "makessize",
      Title: "Makes size",
      type: "number",
    },
  ],
};

export default {
  name: "frostingreceipe",
  title: "Frosting Receipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "line",
      title: "Line",
      type: "array",
      of: [{ type: "line" }],
    },
    {
      name: "makesnum",
      Title: "Makes num",
      type: "number",
    },
    {
      name: "makessize",
      Title: "Makes size",
      type: "number",
    },
  ],
};

export default {
  name: "food",
  title: "Food",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
};

export default {
  name: "unit",
  title: "Unit",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
};

export default {
  name: "amount",
  title: "Amount",
  type: "object",
  fields: [
    {
      name: "value",
      title: "Value",
      type: "number",
    },
    {
      name: "unit",
      title: "Unit",
      type: "reference",
      to: [{ type: "unit" }],
    },
  ],
};

export default {
  name: "line",
  title: "Line",
  type: "object",
  fields: [
    {
      name: "food",
      title: "Food",
      type: "reference",
      to: [{ type: "food" }],
    },
    {
      name: "amount",
      title: "Amount",
      type: "amount",
    },
  ],
};
```

### `npm start`

### `npm test`

### `npm run build`

### `gh-pages -d build`
