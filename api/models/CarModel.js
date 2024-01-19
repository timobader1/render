module.exports = {
  attributes: {
    name: {type: 'string', columnType: 'varchar(50)', required: !0},
    carbrand: {model: 'CarBrand'},
    products: {collection: 'Product', via: 'carmodel'},
  },
};
