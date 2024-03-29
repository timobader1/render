module.exports = {
  friendlyName: 'Add item to shopping basket',
  description: 'Add item to basket.',
  inputs: {
    id: {
      description: 'The id of the product to add',
      type: 'string',
      required: !0,
    },
  },
  exits: {},
  fn: async function (e) {
    console.log ('Add Element to basket......');
    let t = await Product.findOne ({id: e.id});
    this.req.session.basket ||
      (console.log (
        'Create new basket...'
      ), (this.req.session.basket = [])), this.req.session.basket.push (t);
  },
};
