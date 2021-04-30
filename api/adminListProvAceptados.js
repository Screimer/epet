var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();



var proveedoresAceptados = require('../schemas/proveedorRegProveedorAceptado.js');

router.get('/', function (req, res) {
    proveedoresAceptados.find().exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});
module.exports = router;