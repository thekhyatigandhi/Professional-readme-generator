// TODO: Create a function that returns a license badge based on which license is passed in
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
  } else {
    return "";
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return "https://opensource.org/licenses/MIT";
    } else if (license === "ISC") {
      return "https://opensource.org/licenses/ISC";
    } else if (license === "MOZILLA") {
      return "https://opensource.org/licenses/MPL-2.0";
    } else if (license === "UNLICENSE") {
      return "http://unlicense.org/";
    } else {
      return "";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License
This project is licensed under the [${license} license](${renderLicenseLink(
      license
    )}).
`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

# Table of Contents 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Contact Me](#Contact-Details)
    
## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}
* As this license list was not comprehensive, if you need another license, use the contact information below to ask for license to be added. 

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Contact Details 
If you have any questions, please contact me ${data.name} via email at ${
    data.email
  } or visit my GitHub profile https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
