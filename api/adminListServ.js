var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var listarProductos = require('../schemas/schemaProvFormRegProdyServ.js');
var categorias = require('../schemas/schemaProvFormRegProdyServ');
router.get('/', function (req, res) {
    listarProductos.find().exec()
      .then(
        function (result) {
          res.json(result);
        }
    );
    

});



module.exports = router;