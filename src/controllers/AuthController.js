const express = require ('express');

const UserModel = require('../models/user');

const router = express.Router();

router.post('/register',async(req,res) => {

  const User = await UserModel.create(req.body);

   return res.json({
    error: false,
    message:'Registrado com sucesso!',
    data: User
  });  
})

module.exports = router;