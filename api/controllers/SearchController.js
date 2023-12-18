/**
 * SearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

    products: async function (req, res) {
        let products = await Product.find();
        res.view('pages/search', { products });
    }
};

