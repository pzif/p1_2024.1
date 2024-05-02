const express = require ('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

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

router.post('/authenticate', async(req, res)=>{

  const{email, password} = req.body;

  const user = await UserModel.findOne({email}).select('+password');

  if(!user){
    return res.status(400).json({
      error: true,
      message: 'Usuário não encontrado.'
    })
  }

  if(!await bcrypt.compare(password, user.password)){
    return res.status(400).send({
      error: true,
      message: 'Senha inválida!'
    })
  }

  user.password = undefined;

  const token = jwt.sign({
    id: user.id,
    name: user.name
  }, authConfig.secret , {
    expiresIn: 86400

  });

  return res.json({
    user,
    token
  });

})

module.exports = router;