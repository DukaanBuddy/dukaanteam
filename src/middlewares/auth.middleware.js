const { STATUS, X_AUTH_TOKEN } = require("../constants/constants");
const { UNAUTHORIZED } = require("../constants/messages.constant");
const jwt =require('jsonwebtoken');

module.exports.auth=async(req,res,next)=>{
    try {
        const token=req?.headers[X_AUTH_TOKEN]?req?.headers[X_AUTH_TOKEN]:'';
        if(!token){
            return res.status(STATUS.UNAUTHORIZED).send(UNAUTHORIZED)
        }
        let decoded= jwt.decode(token);
        req.auth= decoded;
        next()
    } catch (error) {
        next(error)
    }
}