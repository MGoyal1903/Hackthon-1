// const nodemailer = require('nodemailer');
// //Send Mail
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'mgoyal0412@gmail.com',
//       pass: 'hydrogen1903'
//     }

//   });
//   var mailOptions = {
//     from: 'mgoyal0412@gmail.com',
//     to: 'mayankgoyal19032000@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!',
//     attachments:
//       [
//         {
//           filename: 'centers.json',
//           path: 'C://Users//MGOYA//Desktop//Hackthon-1//centers.json',
//         }
//       ]

//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

let user = 'mgoyal0412@gmail.com';
let pass = 'hydrogen1903';
let person = 'mayankgoyal19032000@gmail.com';
  module.exports.user=user;
  module.exports.pass=pass;
  module.exports.person=person;
  