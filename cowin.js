const puppeteer = require("puppeteer");
const nodemailer = require('nodemailer');
const fs = require('fs');
const mymodule = require("./main");
const gmailinfo = require("./sendmail");
let pin = mymodule.pin;
let user = gmailinfo.user;
let pass = gmailinfo.pass;
let person = gmailinfo.person;
async function register() {
  let browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let pages = await browser.pages();
  let tab = pages[0];
  await tab.goto("https://www.cowin.gov.in/");
  await tab.waitForSelector("#mat-tab-label-0-1", { visible: true });
  await tab.click("#mat-tab-label-0-1");
  await tab.waitForSelector("#mat-input-0", { visible: true });
  await tab.type("#mat-input-0", pin);
  await tab.click(".pinbtncover.ng-star-inserted");
  await tab.waitForTimeout(4000);
  // await tab.click("a>.icon-dashboard");
  let newTab = await browser.newPage();
  await newTab.goto("https://dashboard.cowin.gov.in/");
  await newTab.waitForTimeout(2000);
  await newTab.close();


  //Send Mail
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass
    }

  });
  var mailOptions = {
    from: user,
    to: person,
    subject: 'Sending Email using Node.js by Mayank Goyal',
    text: '!!!!List of the centers in your area!!!!',
    attachments:
      [
        {
          filename: 'centers.json',
          path: '*************************',
        }
      ]

  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
register();






