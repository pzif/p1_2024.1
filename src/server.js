const express = require('express');

const app = express();

app.get('/',(req, res) => {
    return res.json({
        error:false,
        message: 'Acesso permitido! '
    });
} );

app.listen(3001, () =>{
    console.log('O servidor está rodando.');
})