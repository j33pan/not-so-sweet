export default {
  name: 'line',
  title: 'Line',
  type: 'object',
  fields: [
    {
      name: 'food',
      title: 'Food',
      type: 'reference',
      to: [{ type: 'food' }],
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'amount',
    },
  ],
};
