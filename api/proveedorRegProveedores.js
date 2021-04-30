var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage ({ 
destination:function(req,file,cb){
cb(null,'./public/imgs/fotosPerfilProveedor');
},
filename:function(req,file,cb) {
  cb(null,file.originalname)
}
});
const upload =multer({storage:storage});
router.use(express.urlencoded({extended: true}));

var proveedores = require('../schemas/proveedorRegProveedor.js');

router.get('/', function(req, res) {
  proveedores.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});


router.post('/insertar', upload.single('imagen'), function(req, res) {

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
    imagen: req.file.path,
    
});

proveedoresNuevo.save()
  .then(
    function(result) {
      res.json(result);
    }
);
});
module.exports = router;