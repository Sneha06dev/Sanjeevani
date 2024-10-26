// Hardcoding environment variables for testing
process.env.EMAIL_USER = /*'anshuyadav202301jan@gmail.com'*/'sanjeevani.iiita@gmail.com';
process.env.EMAIL_PASS = 'vvio xfbb ovzu iazq';
const nodemailerConfig = require('../config/nodemailerConfig'); // Adjust the path if necessary

const testEmail = 'sneharastogi2006@gmail.com';
const testLink = 'http://localhost:3000/reset-password/testToken';

// Log environment variables to check if they are set correctly
console.log('Environment Variables Loaded:', {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
});

console.log('Sending email to:', testEmail);

nodemailerConfig.resetEmail(testEmail, testLink)
  .then(() => console.log('Test email sent successfully'))
  .catch(err => console.error('Error sending test email:', err));
