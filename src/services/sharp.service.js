const sharp = require('sharp')
const path = require('path');

module.exports.resizeImage=(originalPath,convertPath)=>{
    sharp(path.join(__dirname,'../'+originalPath))
      .rotate()
      .flatten({ background: '#fff' })
      .resize(128,128)
      .jpeg({ mozjpeg: true })
      .toFile(path.join(__dirname,convertPath), (err, info) => {
        console.log(err)
        if(err){
            return false;
        }else{
            return true;
        }
      })
}
