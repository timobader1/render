module.exports = {
    attributes: {
        name: {type: 'string', columnType: 'varchar(50)', required: true},
        carmodels:{collection: 'carmodel', via: 'carbrand'},
    },
};