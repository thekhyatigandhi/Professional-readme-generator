// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./main/utils/generateMarkdown");

// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === "MOZILLA") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "UNLICENSE") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
}

function validateInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Please answer the question to move forward";
  }
}

// TODO: Create an array of questions for user input
const questions = [
  {
    // question for title of the project
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: validateInput,
  },
  {
    // question for the description of the project
    type: "input",
    name: "description",
    message: "Describe the purpose and function of your project",
    validate: validateInput,
  },
  {
    // question for Installation
    type: "input",
    name: "installation",
    message: "What are the dependancies required for your project?",
    validate: validateInput,
  },
  {
    // question for usage of the project
    type: "input",
    name: "usage",
    message: "State the languages and technologies associated with the project",
    validate: validateInput,
  },
  {
    // question for adding contributors of the project
    type: "input",
    name: "contirbuting",
    message: "Please list all the contributors (Use GitHub Usernames)",
    validate: validateInput,
  },
  {
    // question for tests for the project
    type: "input",
    name: "tests",
    message: "How to test this application?",
    validate: validateInput,
  },
  {
    // question with list option for license
    type: "list",
    name: "license",
    message: "Select the license that applies to your project",
    choices: ["MIT", "ISC", "MOZILLA", "UNLICENSE"],
    validate: validateInput,
  },
  {
    // Questions for Gitbhub and personal information
    type: "input",
    name: "name",
    message: "State your full name",
    validate: validateInput,
  },
  {
    type: "input",
    name: "github",
    message: "State your GitHub username",
    validate: validateInput,
  },

  {
    type: "input",
    name: "email",
    message: "Provide a valid email address",
    validate: function (value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        return "Not a valid email address. Please enter a valid email address.";
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    data.licenseBadge = renderLicenseBadge(data.license);
    writeToFile("./myREADME.md", data);
  });
}

// Function call to initialize app
init();
