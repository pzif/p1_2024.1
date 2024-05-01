const express = require ('express');

const UserModel = require('../models/user');

const router = express.Router();

router.post('/register',(req,res) => {
  console.log(req.body);
  return res.json({
    error: false,
    message:'Registrado com sucesso!'
  });  
})

module.exports = router;