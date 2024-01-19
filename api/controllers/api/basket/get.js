module.exports = {
  friendlyName: 'Get',
  description: 'Get basket.',
  inputs: {},
  exits: {},
  fn: async function (e) {
    console.log ('Get Basket.....');
    let s = {
      basket: this.req.session.basket,
      address: this.req.session.address,
    };
    return s;
  },
};
