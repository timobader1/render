module.exports = {
    attributes: {
        titel: {type: 'string', columnType: 'varchar(50)', required: true},
        beschreibung: {type: 'string', columnType: 'varchar(200)', required: true},
        image: {type: 'string', columnType: 'varchar(128)'},
        preis: {type: 'integer', columnType: 'integer(255)', required: true},
        carmodel: {model: 'CarModel'},
        category: {model: 'Category'},
    },
};