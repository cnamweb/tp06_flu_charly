const products = require('../models/products');

const db = require("../models");
const Products = db.products;
const Op = db.Sequelize.Op;

exports.get = (req, res) => {
    Products.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        });
    
}