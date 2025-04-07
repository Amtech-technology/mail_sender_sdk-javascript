/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sendEmailSDK"] = factory();
	else
		root["sendEmailSDK"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/send-mail.js":
/*!**************************!*\
  !*** ./src/send-mail.js ***!
  \**************************/
/***/ ((module) => {

eval("function sendEmail(from, to, companyName, subject, body, apiKey) {\n  return new Promise(function (resolve, reject) {\n    // Construct the API request data (as JSON)\n    var requestData = {\n      email_to: to,\n      email_from: from,\n      subject: subject,\n      body: body,\n      company_name: companyName,\n      api_key: apiKey\n    };\n\n    // Make the POST request to the PHP API with JSON body\n    fetch(\"https://www.amtech-co.com/mail_sender/v1/send-mail/send\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(requestData) // Convert the request data to a JSON string\n    }).then(function (response) {\n      return response.json();\n    }) // Parse the JSON response\n    .then(function (data) {\n      if (data.success) {\n        resolve(data); // Return the response from the server if successful\n      } else {\n        reject(\"Error: \".concat(resolve(data) || \"Unknown error\")); // Handle error message from the API response\n      }\n    })[\"catch\"](function (error) {\n      reject(\"Error sending email: \".concat(error));\n    });\n  });\n}\nmodule.exports = {\n  sendEmail: sendEmail\n};\n\n//# sourceURL=webpack://sendEmailSDK/./src/send-mail.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/send-mail.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});