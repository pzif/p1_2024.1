const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true, //email único
        lowercase: true, // todas as letras minúsculas 
    },
    password: {
        type: String,
        require: true,
        select: false, //não mostrar a senha em consulta ao banco
    },
    createdAt: {
        type: Date,
        default: Date.now //adicionar data de cadastro
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;