var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage ({ 
destination:function(req,file,cb){
cb(null,'./public/imgs/fotosPerfilMascota');
},
filename:function(req,file,cb) {
  cb(null,file.originalname)
}
});
const upload =multer({storage:storage});
router.use(express.urlencoded({extended: true}));

var mascotas = require('../schemas/clienteFormRegMascota.js');

router.get('/', function(req, res) {
    mascotas.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/insertar',upload.single('imagen'), function(req, res) {
  var mascotasNuevo = new mascotas({
      _id: new mongoose.Types.ObjectId(),
      identificacion: req.body. identificacion,
      name: req.body. name,
      raza: req.body. raza,
      padecimientos: req.body. padecimientos,
      vacunas: req.body. vacunas,
      nombreFoto: req.body.nombreFoto,
      imagen: req.file.path,
  
  });

  mascotasNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});
module.exports = router;