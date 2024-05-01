const mongoose = require('../database');

const bcyptjs = require('bcryptjs');

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

UserSchema.pre('save', async function(next) {
    const hash = await bcyptjs.hash(this.password,10);
    //console.log(this);
    //console.log(hash);
    this.password = hash;
})

const User = mongoose.model('User',UserSchema);

module.exports = User;