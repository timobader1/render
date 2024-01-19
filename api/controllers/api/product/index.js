module.exports = {
  friendlyName: 'Index',
  description: 'Index Product.',
  inputs: {},
  exits: {},
  fn: async function (t) {
    return sails.log.debug (
      'List all Products....'
    ), (products = await Product.find ()
      .populate ('category')
      .populate ('carmodel'));
  },
};
