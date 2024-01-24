const Sails = require ('sails/lib/app/Sails');
module.exports = {
  create: async function (e, a) {
    sails.log.debug ('Create new Product....');
    await Product.create (e.allParams ());
    a.redirect ('/product');
  },
  find: async function (e, a) {
    let t;
    sails.log.debug ('List all Products....'), e.query.q && e.query.q.length > 0
      ? (sails.log.debug ('1 List all Products....'), (t = await Product.find ({
          titel: {contains: e.query.q},
        })), e.query.cat &&
          e.query.cat.length > 0 &&
          (sails.log.debug (
            '2 List all Products....'
          ), (t = await Product.find ({
            titel: {contains: e.query.q},
            preis: {'<=': e.query.cat},
          }))))
      : e.query.cat && e.query.cat.length > 0
          ? (sails.log.debug (
              '3 List all Products....'
            ), (t = await Product.find ({preis: {'<=': e.query.cat}})))
          : (t = await Product.find ()
              .populate ('category')
              .populate ('carmodel')), a.view ('pages/Products/index', {
      products: t,
    });
  },
  destroyOne: async function (e, a) {
    sails.log.debug ('Destroy Product....'), await Product.destroyOne ({
      id: e.params.id,
    }), a.redirect ('/products');
  },
  new: async function (e, a) {
    let t = await Category.find (), r = await CarModel.find ();
    a.view ('pages/Products/new', {categories: t, carmodels: r});
  },
  editOne: async function (e, a) {
    sails.log.debug ('Edit single Product....');
    let t = await Category.find (),
      r = await CarModel.find (),
      i = await Product.findOne ({id: e.params.id}).populate ('category');
    a.view ('pages/Products/edit', {product: i, categories: t, carmodels: r});
  },
  updateOne: async function (e, a) {
    sails.log.debug ('Update single Product....');
    await Product.updateOne ({id: e.params.id}).set (e.body);
    a.redirect ('/products');
  },
  findOne: async function (e, a) {
    sails.log.debug ('List single Product....');
    let t = await Product.findOne ({id: e.params.id})
      .populate ('category')
      .populate ('carmodel');
    a.view ('pages/Products/show', {product: t});
  },
  uploadImageForm: async function (e, a) {
    sails.log.debug ('Upload image form....');
    let t = await Product.findOne ({id: e.params.id});
    a.view ('pages/Products/uploadImageForm', {product: t});
  },
  uploadImage: async function (e, a) {
    sails.log ('Upload image for Product...');
    let t = {
      adapter: require ('skipper-s3'),
      key: sails.config.s3accesskey,
      secret: sails.config.s3secret,
      bucket: 'wetebucket',
      region: 'us-west-2',
    },
      r = async function (t, r) {
        if (t) return sails.log ('Upload Error'), a.serverError (t);
        sails.log ('Uploaded!');
        let i = require ('path').basename (r[0].fd);
        return await Product.updateOne ({id: e.params.id}).set ({
          image: i,
        }), a.redirect ('/product');
      };
    await e.file ('image').upload (t, r);
  },
  destroyProducts: async function (e, a) {
    let t;
    sails.log.debug ('Destroy all products from car model....'), e.query.id &&
      e.query.id.length > 0 &&
      (t = await Product.find ({
        carmodel: {contains: e.query.id},
      })), t.forEach (e => Product.destroyOne (e.id)), a.redirect ('/Admin');
  },
};
