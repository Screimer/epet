var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var categorias = require('../schemas/adminCrearCategoria.js');

router.get('/', function(req, res) {
    categorias.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/insertar', function(req, res) {
  var categoriasNuevo = new categorias({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      animal: req.body.animal,
      descripcion: req.body.descripcion,
  });

  categoriasNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});
module.exports = router;