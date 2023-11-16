const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
      sails.log.debug("Create new Car Model....")
      let category = await Category.create(req.allParams());
      res.redirect('/category');
    },
  
    find: async function (req, res) {
      sails.log.debug("List Model....")
      carmodels = await CarModel.find();
      res.view('pages/CarModel/index', { carmodels });
    },
  
    destroyOne: async function (req, res) {
      sails.log.debug("Destroy Category....")
      await Category.destroyOne({ id: req.params.id });
      res.redirect('/category');
    },
  };