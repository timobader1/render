module.exports = {
  attributes: {
    name: {type: 'string', columnType: 'varchar(50)', required: !0},
    carmodels: {collection: 'CarModel', via: 'carbrand'},
  },
};
