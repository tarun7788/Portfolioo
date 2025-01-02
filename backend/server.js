const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT;
const password = process.env.PASSWORD ; 

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
  const {email, message } = req.body;
  const mailOptions = {
    from: email,
    to: 'tarunsaraswat77@gmail.com',
    text: message,
  };

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'akashpauchary77@gmail.com',
    pass: password
  }
});
transporter.debug = true;
console.log(transporter.verify())

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message || 'Error sending message');
    } else {
      res.status(200).send({
        message:'Message Send Succesful',
        email:email,
        messageText:message
      });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



