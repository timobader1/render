module.exports = {
  attributes: {
    name: {type: 'string', columnType: 'varchar(50)', required: !0},
    products: {collection: 'Product', via: 'category'},
  },
};
