const express = require("express");

const app = express();

//Twilio
const accountSid = process.env.TWILLO_ACCOUNT_SID;
const authToken = process.env.TWILLO_AUTH_TOKEN;
const TWILLO_PHONE_NUMBER = process.env.TWILLO_PHONE_NUMBER;

const twilio = require("twilio")(accountSid, authToken);

twilio.messages
  .create({
    from: TWILLO_PHONE_NUMBER,
    to: "+917467808514",
    body: "This is testing message",
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.log(err));

//MongoDB

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
