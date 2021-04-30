var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var padecimientos = require('../schemas/adminCrearPadecimiento.js');

router.get('/', function(req, res) {
    padecimientos.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/insertar', function(req, res) {
  var padecimientosNuevo = new padecimientos({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      animal: req.body.animal,
  });

  padecimientosNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});
module.exports = router;