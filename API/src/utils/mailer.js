const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = function mailer (user, url, action) {
    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
})

let message;

if(action === 'email confirmation') {
    message = `
    <a href=${url}>Click to confirm email address.</a>
    `
}

else if(action === 'forget password') {
    message =`
    <a href=${url}> Click to confirm email address.</a>
    `
    
}

const mailOptions = {
    from: process.env.GMAIL_USER,
    to: user,
    subject: '[IMPORTANT] EMAIL CONFIRMATION',
    html: `${message}`
}


 transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        return console.error(err);
    }
    else {
        console.log('email sent')
    }
})    
}