const { STATUS } = require("../constants/constants")

module.exports.errorHandler=(err,req,res,next)=>{
    try {
        if(err) return res.status(STATUS.INTERNAL_SERVER).send(`Error: ${err}`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}