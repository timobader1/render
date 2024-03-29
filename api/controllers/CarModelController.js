const Sails = require ('sails/lib/app/Sails'),
  ProductController = require ('./ProductController');
module.exports = {
  create: async function (a, e) {
    sails.log.debug ('Create new Car Model....');
    await CarModel.create (a.allParams ());
    e.redirect ('/carmodel');
  },
  find: async function (a, e) {
    sails.log.debug (
      'List Model....'
    ), (carmodels = await CarModel.find ().populate (
      'carbrand'
    )), e.view ('pages/CarModel/index', {carmodels: carmodels});
  },
  destroyOne: async function (a, e) {
    sails.log.debug ('Destroy Car Model....'), await CarModel.destroyOne ({
      id: a.params.id,
    }), e.redirect ('/carmodel');
  },
  new: async function (a, e) {
    let r = await CarBrand.find ();
    e.view ('pages/CarModel/new', {carbrands: r});
  },
  destroyEachModel: async function (a, e) {
    sails.log.debug (
      'Destroy car model and all products from model....'
    ), await ProductController.destroyProducts ({
      id: a.params.id,
    }), await CarModel.destroyOne ({id: a.params.id}), e.redirect ('/carmodel');
  },
  findOne: async function (a, e) {
    sails.log.debug ('List single Car Model....');
    await CarModel.findOne ({id: a.params.id}).populate ('carbrand');
  },
};
