export default {
  name: 'frostingreceipe',
  title: 'Frosting Receipe',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'line',
      title: 'Line',
      type: 'array',
      of: [{ type: 'line' }],
    },
    {
      name: 'makesnum',
      Title: 'Makes num',
      type: 'number',
    },
    {
      name: 'makessize',
      Title: 'Makes size',
      type: 'number',
    },
  ],
};
