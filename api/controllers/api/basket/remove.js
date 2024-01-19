module.exports = {
  friendlyName: 'Remove item from shopping basket',
  description: 'Remove item from shopping basket.',
  inputs: {
    index: {
      description: 'The index of the item to remove',
      type: 'string',
      required: !0,
    },
  },
  exits: {},
  fn: async function (e) {
    console.log (
      'Remove item from basket......'
    ), this.req.session.basket.splice (e.index, 1);
  },
};
