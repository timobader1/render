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
   
  };