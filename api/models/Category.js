module.exports = {
    attributes: {
        name: {type: 'string', columnType: 'varchar(50)', required: true},
        products:{collection: 'Product', via: 'category'},
    },
};