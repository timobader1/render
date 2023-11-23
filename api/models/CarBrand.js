module.exports = {
    attributes: {
        name: {type: 'string', columnType: 'varchar(50)', required: true},
        carmodels:{collection: 'CarModel', via: 'carbrand'},
    },
};