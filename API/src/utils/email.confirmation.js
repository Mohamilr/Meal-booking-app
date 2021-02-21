const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = function mailer (user, link) {
    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
})

const mailOptions = {
    from: process.env.GMAIL_USER,
    to: user,
    subject: '[IMPORTANT] EMAIL CONFIRMATION',
    html: `
    <a href=${link}>Click to confirm email address.</a>
    `
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