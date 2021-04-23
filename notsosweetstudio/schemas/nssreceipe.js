export default {
  name: 'nssreceipe',
  title: 'NSS Receipe',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name:'cakereceipe',
      title:'Cake receipe',
      type: 'reference',
      to: [{type: 'cakereceipe'}]

    },
    {
      name:'frostingreceipe',
      title:'Frosting receipe',
      type:'reference',
      to: [{type:'frostingreceipe'}]
    }
  ],
  // preview: {
  //   select: { title: 'name', media: 'image' },
  // },
};
