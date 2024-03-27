// email-sender.js
const nodemailer = require('nodemailer');

// Créez un transporteur SMTP
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'example@gmail.com',
    pass: 'password'
  }
});

// Options de l'email
let mailOptions = {
  from: 'Zerroukisalaheddine1996@gmail.com',
  to: 'test@gmail.com',
  subject: 'Test Node.js Email',
  text: 'Ceci est un email de test envoyé depuis Node.js'
};

// Envoi de l'email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});
