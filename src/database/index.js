const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pz47_user:Tu8i@cluster0.rxkuh4u.mongodb.net/banco-p1?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true, // Adicionando esta opção para evitar avisos de depreciação
  useUnifiedTopology: true // Adicionando esta opção para evitar avisos de depreciação
})
.then(() => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
})
.catch((error) => {
  console.error('Erro ao conectar com o MongoDB:', error);
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
