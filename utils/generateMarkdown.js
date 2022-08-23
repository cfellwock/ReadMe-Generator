// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Table of Contents:
    ###  * [Installation](#installation)
    ###  * [Usage](#usage)
    ###  * [Contribute](#contribute)
    ###  * [Tests](#tests)
    ###  * [Licenses](#licenses)
    ###  * [Questions](#questions)

    ## Installation:
    ### You must install the following for this app to function:
    ### ${data.installation}

    ## Usage:
    ### ${data.usage}

    ## Contribute:
    ### ${data.contribution}

    ## Tests:
    ### Run the following commands in your terminal to test this app:
    ### ${data.test}

    ## Licenses:
    ### ${data.licenses}

    ## Questions:
    ### If you have any questions, you may contact me at either
    ### Github: https://github.com/${data.username}
    ### or
    ### Email: ${data.email}
  `;   
} 

module.exports = generateMarkdown;
