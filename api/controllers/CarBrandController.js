const Sails = require("sails/lib/app/Sails");

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Create new Brand....")
    let brand = await CarBrand.create(req.allParams());
    res.redirect('/carbrand');
  },

  find: async function (req, res) {
    sails.log.debug("List Brands....")
    carbrands = await CarBrand.find();
    res.view('pages/CarBrand/index', { carbrands });
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy Brand....")

    await CarBrand.destroyOne({ id: req.params.id });
    res.redirect('/carbrand');
  },
  destroy: async function (req, res) {
    sails.log.debug("Destroy Brandxx....")
    
    await CarBrand.destroy({ id: req.params.id });
    res.redirect('/carbrand');
  },

  new: async function (req, res) {
    /*let carbrands = await CarBrand.find();*/
    res.view('pages/CarBrand/new', { /*carbrands*/ });
  },
  findOne: async function (req, res) {
    sails.log.debug("List single CarBrand....")
    let carbrand = await CarBrand.findOne({ id: req.params.id });
    res.view('/carbrand', { product });
  },
};