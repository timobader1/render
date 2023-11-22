const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
      sails.log.debug("Create new Product....")
      let product = await Product.create(req.allParams());
      res.redirect('/product');
    },
  
    find: async function (req, res) {
      sails.log.debug("List Products....")
      products = await Product.find();
      res.view('pages/Products/index', { products });
    },
    destroyOne: async function (req, res) {
      sails.log.debug("Destroy Product....")
      await Product.destroyOne({ id: req.params.id });
      res.redirect('/products');
    },
    new: async function (req, res) {
      let carbrands = await CarBrand.find();
      let categories = await Category.find();
      let carmodels = await CarModel.find();
      res.view('pages/Products/new', { carbrands, categories, carmodels });
    },
    editOne: async function (req, res) {
      sails.log.debug("Edit single Product....")
      let meal = await Product.findOne({ id: req.params.id }).populate('category');
      res.view('pages/meal/edit', { meal: meal });
    },
    updateOne: async function (req, res) {
      sails.log.debug("Update single Product....")
      let meal = await Product.updateOne({ id: req.params.id }).set(req.body);
      res.redirect('/products');
    },
    findOne: async function (req, res) {
      sails.log.debug("List single meal....")
      let meal = await Meal.findOne({ id: req.params.id });
      res.view ('pages/products/show', { meal: meal } );
    },
  };