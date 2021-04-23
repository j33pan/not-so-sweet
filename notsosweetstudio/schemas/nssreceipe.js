import CakeSlice from 'react-icons/gi';

export default {
  name: 'nssreceipe',
  title: 'NSS Receipe',
  type: 'document',
  icon: CakeSlice,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Receipe name:',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Receipe image:',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
      description: 'Receipe description:',
    },
  ],
  // preview: {
  //   select: { title: 'name', media: 'image' },
  // },
};
