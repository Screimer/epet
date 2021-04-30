var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();



var proveedores = require('../schemas/proveedorRegProveedor.js');
var proveedoresAceptados = require('../schemas/proveedorRegProveedorAceptado');

router.get('/', function(req, res) {
    proveedores.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/insertar', function(req, res) {
  var proveedoresNuevo = new proveedores({
      _id: new mongoose.Types.ObjectId(),
      cuenta:req.body.cuenta,
      nombreEmpresa:req.body.nombreEmpresa,
      tipoIdEmpresa:req.body.tipoIdEmpresa,
      idEmpresa:req.body.idEmpresa,
      numeroTelefonoEmpresa:req.body.numeroTelefonoEmpresa,
      provinciaEmpresa: req.body.provinciaEmpresa,
      cantonEmpresa:req.body.cantonEmpresa,
      direccionEmpresa: req.body.direccionEmpresa,
      nombreProveedor:req.body.nombreProveedor,
      primerApellido:req.body.primerApellido,
      segundoApellido:req.body.segundoApellido,
      email: req.body.email,
      tipoIdProveedor:req.body.tipoIdProveedor,
      identificacionProveedor:req.body.identificacionProveedor,
      numeroTelefonoProveedor:req.body.numeroTelefonoProveedor,
      genero:req.body.genero,
      fechaCumple:req.body.fechaCumple,
      nombreFoto: req.body.nombreFoto,
      contrasena:req.body.contrasena,
   
  });

  proveedoresNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});


router.post('/Eliminar', function (req, res) {
  console.log(req.body.registroAEliminarProveedorId);
  var idUsuario = req.body.registroAEliminarProveedorId;
  
  proveedores.findByIdAndRemove(idUsuario, function (err, docs) {
    if (err){
        console.log(err)
    }
});
    
});

router.post('/Aceptar', function (req, res) {
  
  console.log(req.body.registroAEliminarProveedorId);
  var idUsuario = req.body.registroAEliminarProveedorId;

  /*Inicio*/ 
  
  

  /*Fin*/ 
  
  proveedores.findById(idUsuario, function (err, docs) {
    if (err){
      console.log(err)
    }else{
      var proveedoresNuevo = new proveedoresAceptados({
        _id: docs._id,
        cuenta:docs.cuenta,
        nombreEmpresa:docs.nombreEmpresa,
        tipoIdEmpresa:docs.tipoIdEmpresa,
        idEmpresa:docs.idEmpresa,
        numeroTelefonoEmpresa:docs.numeroTelefonoEmpresa,
        provinciaEmpresa: docs.provinciaEmpresa,
        cantonEmpresa:docs.cantonEmpresa,
        direccionEmpresa: docs.direccionEmpresa,
        nombreProveedor:docs.nombreProveedor,
        primerApellido:docs.primerApellido,
        segundoApellido:docs.segundoApellido,
        email: docs.email,
        tipoIdProveedor:docs.tipoIdProveedor,
        identificacionProveedor:docs.identificacionProveedor,
        numeroTelefonoProveedor:docs.numeroTelefonoProveedor,
        genero:docs.genero,
        fechaCumple:docs.fechaCumple,
        nombreFoto:docs.nombreFoto,
        contrasena:docs.contrasena,
    
      }); 
      proveedoresNuevo.save()
      .then(
        function(result) {
          res.json(result);
        }
    );
    eliminarElRegistroYaAceptado(idUsuario); 
           
  }
     
  });
     
 
      
});

function eliminarElRegistroYaAceptado(idUsuario){
  proveedores.findByIdAndRemove(idUsuario, function (err, docs) {
    
});
}
    


router.get('/aceptarDos', function (req, res) {
  proveedoresAceptados.find().exec()
    .then(
      function (result) {
        res.json(result);
      }
  );

  

});


module.exports = router;