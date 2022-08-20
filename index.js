// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a project title.")
                return false; 
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: "How do you install this project?",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter installation instructions.")
                return false; 
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: "How do you use this project?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter usage instructions.")
                return false; 
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: "How can others contribute to this project?",
        validate: contirubitonInput => {
            if (contirubitonInput) {
                return true;
            } else {
                console.log("Please enter constribution guidelines.")
                return false; 
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: "How can others test this project?",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter test instructions.")
                return false; 
            }
        }
    },

    {
        type: 'input',
        name: 'licenses',
        message: "Which licenses does this project use?",
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Please select a license.")
                return false; 
            }
        }
    },

    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.")
                return false; 
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your emailAddress?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email address.")
                return false; 
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answerData) {
    // promise here
    return fs.writeFile(fileName, answerData,  (err) => { 
        if (err) { 
          console.log(err); 
        }})
      
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
        .then(function(data){
            writeToFile("generatedREADME.md", generateMarkDown(data))
        })
    .catch(error => {
        console.log(error)
    })
}



// Function call to initialize app
init();
