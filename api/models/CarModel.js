module.exports = {
    attributes: {
        name: {type: 'string', columnType: 'varchar(50)', required: true},
        carbrand: {model: 'CarBrand'},
        products:{collection: 'Product', via: 'carmodel'},
    },
};