const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
console.log('middleware');;
const authHeader = req.headers.authorization;

if(!authHeader){
    return res.status(401).json({
        errror: true,
        message: 'Token não fornecido.'
    })
}

const parts = authHeader.split(' ');

if(parts.length !==2){
    return res.status(401).json({
        error: true,
        message: 'Token com formato inválido.'
    })
}

const [scheme, token ] = parts;

if(scheme.indexOf('Bearer') !==0){
    return res.status(401).json({
        error: true,
        message: 'Token mal formatado.'
    })
}

console.log(authHeader);

return jwt.verify(token,authConfig.secret,  (err, decoded) => {

    console.log(err);
    console.log(decoded);
    
    if(err){
        return res.status(401).json({
            error: true,
            message: 'Token inválido/expirado.'
        })
    }

    req.userLogged = decoded;


    

    return next();

})

}
