const Sails = require("sails/lib/app/Sails");
const ProductController = require("./ProductController");

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

    destroyEachModel: async function (req, res) {
      sails.log.debug("Destroy car model and all products from model....")
      await ProductController.destroyProducts({id: req.params.id});
      await CarModel.destroyOne({ id: req.params.id });
      res.redirect('/carmodel');
    },
    findOne: async function (req, res) {
      sails.log.debug("List single Car Model....")
      let carmodel = await CarModel.findOne({ id: req.params.id }).populate("carbrand");
    },
  };