var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage ({ 
destination:function(req,file,cb){
cb(null,'./public/imgs/fotosPerfilCliente');
},
filename:function(req,file,cb) {
  cb(null,file.originalname)
}
});
const upload =multer({storage:storage});
router.use(express.urlencoded({extended: true}));

var clientes = require('../schemas/clienteFormRegCliente.js');

router.get('/', function(req, res) {
    clientes.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/subir', upload.single('imagen'), function(req,res){
});

router.post('/insertar',function(req, res) {
  var clientesNuevo = new clientes({
      _id: new mongoose.Types.ObjectId(),
      cuenta:req.body.cuenta,
      nombre: req.body.nombre,
      primerApellido: req.body.primerApellido,
      segundoApellido: req.body.segundoApellido,
      email: req.body.email,
      genero: req.body.genero,
      tipo:req.body.tipo,
      identificacion: req.body.identificacion,
      fecha: req.body.fecha,
      direccionExacta: req.body.direccionExacta,
      numeroTelefono: req.body.numeroTelefono,
      nombreFoto: req.body.nombreFoto,
      imagen: req.body.imagen,
      contrasena:req.body.contrasena,
  });

  clientesNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});
module.exports = router;