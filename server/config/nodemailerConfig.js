require('dotenv').config(); 
console.log('nodemailerConfig.js loaded');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
process.env.EMAIL_USER = /*'anshuyadav202301jan@gmail.com'*/'sanjeevani.iiita@gmail.com';
process.env.EMAIL_PASS = /*'vvio xfbb ovzu iazq'*/'qaqn onql tbbw wrph';
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/users');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log('transporter created');

exports.resetEmail = (toEmail, resetLink) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: 'Password Reset of Sanjeevani',
    text: `You forgot your password for our site Sanjeevani. Click here to reset your password: ${resetLink}`,
  };

  console.log('Sending email to:', toEmail);

  return transporter.sendMail(mailOptions);
};
