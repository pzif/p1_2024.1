const express = require ('express');

const UserModel = require('../models/user');

const router = express.Router();

router.post('/register',async(req,res) => {

  const {email} = req.body
  
  if(await UserModel.findOne({email})){
    return res.status(400).json({
      error: true,
      message:'Usuário já cadastrado'
    })
  }

  const User = await UserModel.create(req.body);

  User.password = undefined;

   return res.json({
    error: false,
    message:'Registrado com sucesso!',
    data: User
  });  
})

module.exports = router;