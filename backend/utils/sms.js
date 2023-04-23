const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID || "ACCOUNT_SID"; 

const authToken = process.env.TWILIO_AUTH_TOKEN || "token";
const twilioClient = twilio(accountSid, authToken);

async function sendSMS(phoneNumber, message) {
  try {
    const result = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER || "",
      to: phoneNumber
    });
    console.log(`SMS sent to ${result.to}`);
  } catch (err) {
    console.error(`Error sending SMS to ${phoneNumber}: ${err.message}`);
  }
}

module.exports =sendSMS;