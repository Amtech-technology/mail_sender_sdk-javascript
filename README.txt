Amtech Mail Sender SDK Documentation
======================================

Overview
---------
The Mail Sender SDK provides an easy way to send emails through an API, utilizing Node.js and browser environments. The SDK abstracts the complexity of sending emails and handles API calls to send email messages in both server-side (Node.js) and client-side (browser) applications.

Key Features:
- Node.js & Browser Support: Works in both environments.
- API Integration: Seamlessly connects to the mail sending API.
- Error Handling: Provides clear error messages.
- Cross-Platform: Automatically detects the environment and adapts the fetch API accordingly.

Installation
------------
1. Install the SDK:
2. 
sh:
   npm install mail-sender-sdk


2. Usage in Node.js:
js:
   import { sendEmail } from 'mail-sender-sdk';

   const apiKey = 'your-sendgrid-api-key';
   const from = 'sender@example.com';
   const to = 'recipient@example.com';
   const subject = 'Test Email';
   const body = 'This is a test email body.';
   const companyName = 'Your Company';

   sendEmail(from, to, companyName, subject, body, apiKey)
       .then(response => {
           console.log('Email sent successfully!', response);
       })
       .catch(error => {
           console.error('Error sending email:', error);
       });


3. Usage in the Browser:
   
html:
   <script type="module" src='index.js'></script>

   into the index.js file:
            import { sendEmail } from './path/to/index.js';

                const apiKey = 'your-sendgrid-api-key';
                const from = 'sender@example.com';
                const to = 'recipient@example.com';
                const subject = 'Test Email';
                const body = 'This is a test email body.';
                const companyName = 'Your Company';

                sendEmail(from, to, companyName, subject, body, apiKey)
                    .then(response => {
                        console.log('Email sent successfully!', response);
                    })
                    .catch(error => {
                        console.error('Error sending email:', error);
                    });


API Usage
---------
Function: `sendEmail(from, to, companyName, subject, body, apiKey)`

Parameters:
- `from` (String): Sender's email address.
- `to` (String): Recipient's email address.
- `companyName` (String): Name of the company sending the email.
- `subject` (String): Subject of the email.
- `body` (String): Email content.
- `apiKey` (String): API key for authentication.

Returns:
- A promise that resolves with the API response on success or rejects with an error message.

Error Handling
--------------
- CORS Issues: Ensure API server allows browser-origin requests.
- Network Errors: The SDK will reject the promise if the network fails.
- Invalid API Key: Ensure your API key is valid.

FAQ
---
Q1: What if my email fails to send?
- The SDK provides an error message for troubleshooting. Check API credentials and network settings.

Q2: Can I use this SDK with other email providers?
- Yes, as long as they support HTTP API requests.

Q3: Is there a way to check if an email was sent?
- The promise resolves with the response object. Check the response data.

Copyright & Credits
-------------------
© 2025 Amtech Technology (Amtech-co LLC | Software). All rights reserved.
