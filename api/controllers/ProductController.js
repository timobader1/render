const Sails = require("sails/lib/app/Sails");

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Create new Product....")
    let product = await Product.create(req.allParams());
    res.redirect('/product');
  },

  find: async function (req, res) {
    sails.log.debug("List all Products....")
    let products;
    if (req.query.q && req.query.q.length > 0) {sails.log.debug("1 List all Products....")
      products = await Product.find({
        titel: {
          'contains': req.query.q
        },
      })
      if (req.query.cat && req.query.cat.length > 0) {sails.log.debug("2 List all Products....")
      products = await Product.find({
        titel: {
          'contains': req.query.q
        },
        preis: {
          '<=': req.query.cat
        },
      })
      }
    } else if (req.query.cat && req.query.cat.length > 0) {sails.log.debug("3 List all Products....")
    products = await Product.find({
      preis: {
        '<=': req.query.cat
      },
    })
      
    } else {
      products = await Product.find().populate("category").populate("carmodel");

    }
    res.view('pages/Products/index', { products });
  },
  destroyOne: async function (req, res) {
    sails.log.debug("Destroy Product....")
    await Product.destroyOne({ id: req.params.id });
    res.redirect('/products');
  },
  new: async function (req, res) {
    /*let carbrands = await CarBrand.find();*/
    let categories = await Category.find();
    let carmodels = await CarModel.find();
    res.view('pages/Products/new', { /*carbrands,*/ categories, carmodels });
  },
  editOne: async function (req, res) {
    sails.log.debug("Edit single Product....")
    let categories = await Category.find();
    let carmodels = await CarModel.find();
    let product = await Product.findOne({ id: req.params.id }).populate('category');
    res.view('pages/Products/edit', { product, categories, carmodels });
  },
  updateOne: async function (req, res) {
    sails.log.debug("Update single Product....")
    let products = await Product.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/products');
  },
  findOne: async function (req, res) {
    sails.log.debug("List single Product....")
    let product = await Product.findOne({ id: req.params.id }).populate("category").populate("carmodel");
    res.view('pages/Products/show', { product });
  },
  uploadImageForm: async function (req, res) {
    sails.log.debug("Upload image form....")
    let product = await Product.findOne({ id: req.params.id })
    res.view('pages/products/uploadImageForm', { product: product });
  },

  uploadImage: async function (req, res) {
    sails.log("Upload image for Product...")
    // Define the parameters of the upload as an object
    // In this example only the path, wehre to upload the image, is set
    let params = {
      //dirname: require('path').resolve(sails.config.appPath, 'assets/images/meals/')
      adapter: require('skipper-s3'),
      key: sails.config.s3accesskey,
      secret: sails.config.s3secret,
      bucket: 'wetebucket',
      region: 'us-west-2'
    };

    let callback = async function (err, uploadedFiles) {
      if (err) {
        sails.log("Upload Error")
        return res.serverError(err);
      } else {
        sails.log("Uploaded!")
      }
      let fname = require('path').basename(uploadedFiles[0].fd);
      await product.updateOne({ id: req.params.id }).set({ image:fname });
      return res.redirect('/product');
    };

      // This funvtion is called, once all files are uploaded
      // err indicates if the upload process triggered an error and has been aborted 
      // uploaded files contains an array of the files which have been uploaded, in our case only one.
      await req.file('image').upload(params, callback);
    },
};
