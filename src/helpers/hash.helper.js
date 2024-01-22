const bcrypt=require('bcrypt');
const ROUND=10;

module.exports.hashPassword=async (password)=>{
    const salt=await this.genrateSalt()
    return bcrypt.hash(password, salt);
}

module.exports.verifyPassword=async (password,hashPassword)=>{
    return bcrypt.compare(password,hashPassword);
}

module.exports.genrateSalt=async ()=>{
    return await bcrypt.genSalt(ROUND);
}