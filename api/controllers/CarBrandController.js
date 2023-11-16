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
    res.redirect('/home');
  },
};