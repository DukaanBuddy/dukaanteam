const jwt= require('jsonwebtoken');
const {SECRET} =require('../config/db.config')

module.exports.generateToken=(payload)=>{
    return jwt.sign(payload,SECRET);
}

module.exports.decodeToken=(token)=>{
    return jwt.decode(token);
}

module.exports.verifyToken=(token)=>{
    return jwt.verify(token,SECRET);
}