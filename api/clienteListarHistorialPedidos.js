var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var listarMisPedidos = require('../schemas/schemaClienteListarHistorialPedidos.js');

router.get('/', function (req, res) {
    listarMisPedidos.find().exec()
      .then(
        function (result) {
          res.json(result);
        }
    );
});



module.exports = router;