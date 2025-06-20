const jwt = require('jsonwebtoken');
require('dotenv').config();

function validateToken(req, res, next){
    const token = req.headers.authorization        // Obtém o token do cabeçalho de autorização 

    if(!token){
        return res.status(401).send({
            error: 'Token não fornecido'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;           // Decodifica o token e adiciona as informações do usuário ao objeto de requisição  
        next();
    } catch (error) {
        return res.status(401).send({
            error: 'Token inválido!'
        })          // Validação do token, se expirado ou inválido
    }
} 

module.exports = {
    validateToken
}

