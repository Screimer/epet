var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var pedidos = require('../schemas/schemaProvListPedidos');

router.get('/', function(req, res) {
    pedidos.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/insertar', function(req, res) {
  var pedidoNuevo = new clientes({
      _id: new mongoose.Types.ObjectId(),
      cedulaCliente:req.body.cedulaCliente,
      nombreProducto: req.body.nombreProducto,
      cantidad: req.body.cantidad,
      precioUnitario: req.body.precioUnitario,
      total: req.body.total,
      nonbreProveedor: req.body.nombreProveedor,
      numeroProveedor:req.body.numeroProveedor,
      estado: req.body.estado,
  });

  pedidoNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});
module.exports = router;