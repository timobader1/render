const Sails = require ('sails/lib/app/Sails');
module.exports = {
  create: async function (e, a) {
    sails.log.debug ('Create new Category....');
    await Category.create (e.allParams ());
    a.redirect ('/category');
  },
  find: async function (e, a) {
    sails.log.debug (
      'List Category....'
    ), (categories = await Category.find ()), a.view ('pages/Category/index', {
      categories: categories,
    });
  },
  destroyOne: async function (e, a) {
    sails.log.debug ('Destroy Category....'), await Category.destroyOne ({
      id: e.params.id,
    }), a.redirect ('/category');
  },
  new: async function (e, a) {
    a.view ('pages/Category/new', {});
  },
  findOne: async function (e, a) {
    sails.log.debug ('List single Category....');
    await Category.findOne ({id: e.params.id});
    a.view ('pages/Products/show', {product: product});
  },
};
