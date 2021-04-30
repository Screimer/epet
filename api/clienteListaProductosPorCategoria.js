var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();



var productosYServiciosRegistrados = require('../schemas/schemaProvFormRegProdyServ.js');


router.get('/', function (req, res) {
    productosYServiciosRegistrados.find().exec()
        .then(
            function (result) {
                res.json(result);
            }
        );
});
module.exports = router;