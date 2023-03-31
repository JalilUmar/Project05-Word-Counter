"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var userInput = await inquirer_1["default"].prompt([
    {
        type: "input",
        name: "para",
        message: "Enter Text to count the words :"
    },
]);
var words = userInput.para.trim().split(" ");
console.log("Your word count is ".concat(words.length));
