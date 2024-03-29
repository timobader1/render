const Sails = require ('sails/lib/app/Sails');
module.exports = {
  create: async function (a, r) {
    sails.log.debug ('Create new Brand....');
    await CarBrand.create (a.allParams ());
    r.redirect ('/carbrand');
  },
  find: async function (a, r) {
    sails.log.debug (
      'List Brands....'
    ), (carbrands = await CarBrand.find ()), r.view ('pages/CarBrand/index', {
      carbrands: carbrands,
    });
  },
  destroyOne: async function (a, r) {
    sails.log.debug ('Destroy Brand....'), await CarBrand.destroyOne ({
      id: a.params.id,
    }), r.redirect ('/carbrand');
  },
  destroy: async function (a, r) {
    sails.log.debug ('Destroy Brandxx....'), await CarBrand.destroy ({
      id: a.params.id,
    }), r.redirect ('/carbrand');
  },
  new: async function (a, r) {
    r.view ('pages/CarBrand/new', {});
  },
  findOne: async function (a, r) {
    sails.log.debug ('List single CarBrand....');
    await CarBrand.findOne ({id: a.params.id});
    r.view ('/carbrand', {product: product});
  },
};
