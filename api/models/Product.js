module.exports = {
  attributes: {
    titel: {type: 'string', columnType: 'varchar(50)', required: !0},
    beschreibung: {type: 'string', columnType: 'varchar(200)', required: !0},
    image: {type: 'string', columnType: 'varchar(128)'},
    preis: {type: 'integer', columnType: 'integer(255)', required: !0},
    carmodel: {model: 'CarModel'},
    category: {model: 'Category'},
  },
};
