module.exports.policies = {
  '*': 'is-logged-in',
  'entrance/*': !0,
  'account/logout': !0,
  'api/product/index': !0,
  'view-admin': 'is-super-admin',
  CarBrandController: {'*': 'is-super-admin'},
  CarModelController: {'*': 'is-super-admin'},
  CategoryController: {'*': 'is-super-admin'},
  ProductController: {
    create: 'is-seller-or-admin',
    find: !0,
    destroyOne: 'is-super-admin',
    new: 'is-seller-or-admin',
    findOne: !0,
    editOne: 'is-super-admin',
    updateOne: 'is-super-admin',
  },
};
