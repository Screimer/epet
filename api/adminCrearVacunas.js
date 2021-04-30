var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var vacunas = require('../schemas/adminCrearVacuna.js');

router.get('/', function(req, res) {
    vacunas.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/insertar', function(req, res) {
  var vacunasNuevo = new vacunas({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      animal: req.body.animal,
  });

  vacunasNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});

module.exports = router;