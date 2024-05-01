const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pz47_user:ZqSXvrOm3GazY85j@cluster0.rxkuh4u.mongodb.net/banco-p1?retryWrites=true&w=majority&appName=Cluster0', {}, (error)=>{
    if(error){
        console.log('Falha ao conectar com mongodb!');
        console.log(error);
        return;
    }

    console.log('Conexão com o mongodb estável!');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;