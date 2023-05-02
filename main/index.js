// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require ("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
type: "input",
name: "title",
message: "What is the title of your project?",
},
{
type: "input",
name: "description",
message: "Describe the purpose and function of your project",
},
{
type: "input",
name: "installation",
message: "What are the dependancies required for your project?",
},
{
type: "input",
name: "usage",
message: "State the languages and technologies associated with the project",
},
{
type: "input",
name: "contirbuting",
message: "Please list all the contributors (Use GitHub Usernames)",
},
{
type: "input",
name: "tests",
message: "How to test this application?",
},
{
type: "checkbox",
name: "license",
message: "Select the license that applies to your project",
choices : ["MIT" ,"ISC", "MOZILLA", "UNLICENSE", "NONE" ]
},
{
type: "input",
name: "name",
message: "State your full name",
},
{
    type: "input",
    name: "github",
    message: "State your GitHub username",
    },

    {
        type: "input",
        name: "email",
        message: "Provide a valid email address",
        },

]
.then((answers) => {
const readmePageContent = generateReadMe(answers);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),filename),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((responses)=>{
        console.log("creating a professional README.ms file");
        
    }
}

// Function call to initialize app
init();
