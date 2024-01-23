const mongoose= require('mongoose');
const { DB_URL } = require('../config/config');

module.exports=()=>{
    try {
        mongoose.connect(DB_URL).then((conn)=>{
            console.log(`DB connect on ${DB_URL}`)
        }).catch((ex)=>{
            console.log(`DB ERROR: ${ex}`)
        })
    } catch (error) {
        console.log(error)
    }
}