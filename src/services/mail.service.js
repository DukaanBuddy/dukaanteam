const nodemailer = require("nodemailer");
const { EMAIL_HOST, EMAIL, EMAIL_PASS, EMAIL_PORT } = require("../config/db.config");

let transporter = nodemailer.createTransport({
   host: EMAIL_HOST,
   port: EMAIL_PORT,
   secure: false,
   auth: {
       user: EMAIL,
       pass: EMAIL_PASS
   }
})
module.exports.sendMail=async (to,subject,template,attachments=[])=>{
    try {
          transporter.sendMail({
            from: "khushbumukundpur@gmail.com", // verified sender email
            to: to?to:"deepakmukundpur@gmail.com", // recipient email
            subject: subject?subject:"Test message subject", // Subject line
            html: template?template:"<b>Hello world!</b>", // html body
            attachments:attachments // attachment
          }, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    } catch (error) {
        console.log('Error : '+error);
    }
}