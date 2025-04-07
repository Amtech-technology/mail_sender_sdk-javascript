//////////////////////////////////////////////////////////////////////////////////////
// COMPANY: Amtech technology (Amtech-co LLC | Software)
// Copyright: ©copyright Amtech-co LLC | Software
// SDK: Amtech Mail Sender
// DESCRIPTION: Send mails through this SDK using javascript
// CONTACT INFORMATION:
//          Whatsapp: +243 977 776 716
//          Email: contact@amtech-co.com
//          Website: https://amtech-co.com
///////////////////////////////////////////////////////////////////////////////////////

//const { sendEmail } = require('./src/send-mail.js');  // Import the sendEmail function
import { sendEmail } from './src/send-mail.js';

const apiKey = '__APIKEY__';  // Replace with your actual SendGrid API key.
// Create an account at Amtech technology and receive your free APIkey
const from = 'exemple@domain.com';  // Sender's email
const to = 'exemple@domain.com';  // Recipient's email exemple@domain.com
const emailCC = 'exemple@domain.com'; // required. set the company email adresse if don't what to put here!
const emailBCC = 'exemple@domain.com'; // required. set the company email adresse if don't what to put here!
const attachment = ''; // the attachment is not supported yet. leave it blank until the update
const attachment_name = ''; // leave this blank as well

const subject = 'subject message';
const body = 'body message'; // you can include html format as well
const companyName = 'your company name';  // Company name

sendEmail(from, to, emailCC, emailBCC, attachment, attachment_name, companyName, subject, body, apiKey)
    .then(response => {
        console.log('Response:', response);
    })
    .catch(error => {
        console.error('Response:', error);
    });

//////////////////////////////////////////////////////////////////////////////////////