var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();



var productosYServiciosRegistrados = require('../schemas/schemaProvFormRegProdyServ.js');
var pedidosClientes = require('../schemas/SchemaClienteDetalleProd.js')


router.get('/mostrarInfoProducto', function (req, res) {
    productosYServiciosRegistrados.find().exec()
        .then(
            function (result) {
                res.json(result);
            }
        );
        
        
});


router.post('/anadirAlCarrito',  function(req, res) {

    var pedidosClientesNuevo = new pedidosClientes({
        _id: new mongoose.Types.ObjectId(),
        numeroIdentificacionCliente: req.body.identificacionCliente,
        nombreDelCliente: req.body.nombreCliente,
        numeroTelefonoCliente: req.body.numeroTelefonoCliente,
        nombreDelProducto: req.body.nombreDelProducto,
        precio: req.body.precio,
        cantidadDeProducto: req.body.cantidadDeProducto,
        subtotalDelProducto: req.body.subtotalDeProducto,
        numeroTelefonoEmpresa: req.body.numeroTelefonoEmpresa,
        nombreDelCliente: req.body.nombreDelCliente,
        numeroDeTelefonoCliente: req.body.numeroDeTelefonoCliente,
        nombreEmpresaProducto: req.body.nombreEmpresaProducto,
        numeroIdentificacionProveedor: req.body.numeroIdentificacionProveedor,
        estado: req.body.estado,
    });
    
    pedidosClientesNuevo.save()
      .then(
        function(result) {
          res.json(result);
        }
    );
    });

    /*Falta el redireccionamiento*/



module.exports = router;