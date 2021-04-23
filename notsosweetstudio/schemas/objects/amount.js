export default {
  name: 'amount',
  title: 'Amount',
  type: 'object',
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'number',
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'reference',
      to: [{ type: 'unit' }],
    },
  ],
};
