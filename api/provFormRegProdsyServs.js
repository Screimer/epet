var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var path = require('path');


var productoOServicio = require('../schemas/schemaProvFormRegProdyServ.js');
var categoriasRegistradas = require('../schemas/adminCrearCategoria.js')

const multer = require('multer');
const storage = multer.diskStorage ({ 
destination:function(req,file,cb){
cb(null,'./public/imgs/fotosDeProductosOServicios');
},
filename:function(req,file,cb) {
  cb(null,file.originalname)
}
});
const upload = multer({storage:storage});
router.use(express.urlencoded({extended: true}));


router.get('/', function(req, res) {
  productoOServicio.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/insertar', upload.single('imagen'), function(req, res) {
    
    var productoOServicioNuevo = new productoOServicio({
        _id: new mongoose.Types.ObjectId(),
        identificacionProveedor: req.body.identificacionProveedor,
        nombreEmpresa:req.body.nombreEmpresa,
        numeroTelEmpresa:req.body.numeroTelEmpresa,
        nombreDelProducto: req.body.nombreDelProducto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        especie: req.body.especie,
        tipo: req.body.tipo,
        provincias: req.body.provincias,
        cantones:req.body.cantones,
        categoria: req.body.categoria,
        nombreFoto:req.body.nombreFoto,
        path: req.file.path,
    });
    
    productoOServicioNuevo.save()
      .then(
        function(result) {
          res.json(result);
          
        }
    );
    
});

router.get('/categoriasRegistradas', function (req, res) {
  categoriasRegistradas.find().exec()
    .then(
      function (result) {
        res.json(result);
      }
  );
});

module.exports = router;
