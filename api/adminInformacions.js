var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var administradors = require('../schemas/adminInformacion.js');

router.get('/', function(req, res) {
    administradors.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
router.post('/insertar',function(req, res) {
  var administradorsNuevo = new administradors({
      _id: new mongoose.Types.ObjectId(),
      cuenta:req.body.cuenta,
      email:req.body.email,
      contrasena:req.body.contrasena,
  });

  administradorsNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
  );
});
module.exports = router;