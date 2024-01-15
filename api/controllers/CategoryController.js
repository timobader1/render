const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
      sails.log.debug("Create new Category....")
      let category = await Category.create(req.allParams());
      res.redirect('/category');
    },
  
    find: async function (req, res) {
      sails.log.debug("List Category....")
      categories = await Category.find();
      res.view('pages/Category/index', { categories });
    },
  
    destroyOne: async function (req, res) {
      sails.log.debug("Destroy Category....")
      await Category.destroyOne({ id: req.params.id });
      res.redirect('/category');
    },

    new: async function (req, res) {
      res.view('pages/Category/new', { });
    },
    findOne: async function (req, res) {
      sails.log.debug("List single Category....")
      let category = await Category.findOne({ id: req.params.id });
      res.view('pages/Products/show', { product });
    },
  };