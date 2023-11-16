const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
      sails.log.debug("Create new Car Model....")
      let category = await Category.create(req.allParams());
      res.redirect('/category');
    },
  
    find: async function (req, res) {
      sails.log.debug("List Category....")
      categories = await Category.find();
      res.view('pages/category/index', { categories });
    },
  
    destroyOne: async function (req, res) {
      sails.log.debug("Destroy Category....")
      await Category.destroyOne({ id: req.params.id });
      res.redirect('/category');
    },
  };