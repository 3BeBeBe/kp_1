const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kp24piu@gmail.com', // your email
        pass: 'utilit4S' // your email password
    }
});

app.use(express.json()); // This line is needed to parse JSON request body

app.post('/send-email', (req, res) => {
    let mailOptions = {
        from: 'kp24piu@gmail.com', // sender address
        to: 'nyaaitem@gmail.com', // list of receivers
        subject: 'Email from Vue.js app', // Subject line
        text: `Name: ${req.body.nama}, Phone: ${req.body.telepon}, Type: ${req.body.jenis}, Location: ${req.body.lokasi}, Detail: ${req.body.detail}`, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});

app.listen(8081, () => console.log('Server started...'));