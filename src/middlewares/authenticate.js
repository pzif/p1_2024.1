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

next();

}
