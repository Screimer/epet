var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var razas = require('../schemas/adminCrearRaza.js');

router.get('/', function(req, res) {
    razas.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/insertar', function(req, res) {
  var razasNuevo = new razas({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      animal: req.body.animal,
  });

  razasNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});

module.exports = router;