"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = sendEmail;
///////////////////////////////////////////////////////////////////////////////////////////////////////

//import fetch from "node-fetch";  // Import 'fetch' for older Node.js versions
// Check if we're in a Node.js environment
var isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
if (isNode && !globalThis.fetch) {
  // Import 'node-fetch' only in Node.js
  globalThis.fetch = require('node-fetch');
}
function sendEmail(from, to, emailCC, emailBCC, attachment, attachment_name, companyName, subject, body, apiKey) {
  return new Promise(function (resolve, reject) {
    // Construct the API request data (as JSON)
    var requestData = {
      email_to: to,
      email_from: from,
      emailCC: emailCC,
      emailBCC: emailBCC,
      attachment: attachment,
      attachment_name: attachment_name,
      subject: subject,
      body: body,
      company_name: companyName,
      api_key: apiKey
    };

    // Make the POST request to the PHP API with JSON body
    fetch("https://www.amtech-co.com/mail_sender/v1/send-mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData) // Convert the request data to a JSON string
    }).then(function (response) {
      return response.json();
    }) // Parse the JSON response
    .then(function (data) {
      if (data.success) {
        resolve(data); // Return the response from the server if successful
      } else {
        reject("Error: ".concat(resolve(data) || "Unknown error")); // Handle error message from the API response
      }
    })["catch"](function (error) {
      reject("Error sending email: ".concat(error));
    });
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////