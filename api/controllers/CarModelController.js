const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
      sails.log.debug("Create new Car Model....")
      let model = await CarModel.create(req.allParams());
      res.redirect('/carmodel');
    },
  
    find: async function (req, res) {
      sails.log.debug("List Model....")
      carmodels = await CarModel.find().populate("carbrand");
      res.view('pages/CarModel/index', { carmodels });
    },
  
    destroyOne: async function (req, res) {
      sails.log.debug("Destroy Car Model....")
      await CarModel.destroyOne({ id: req.params.id });
      res.redirect('/carmodel');
    },
      
    new: async function (req, res) {
      let carbrands = await CarBrand.find();
      res.view('pages/CarModel/new', { carbrands });
    },
  };