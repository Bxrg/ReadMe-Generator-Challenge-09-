// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

   {type: 'input',
        name: 'projectName',
        message: 'Please enter the name of your project',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('You need to enter the project name to continue!');
                return false;
            }
        }
    },

    {type: 'input',
        name: 'description',
        message: 'Please provide a description of the project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },

    {type: 'input',
        name: 'installation',
        message: 'Provide installation instructions.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation instructions to continue!');
                return false;
            }
        }
    },

    {type: 'input',
        name: 'usage',
        message: 'What is the use of this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please state the use of the project!');
                return false;
            }
        }
    },

    {type: 'input',
        name: 'contribution',
        message: 'What information should future contributors know?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information for project contributors!');
                return false;
            }
        }
    },

    {type: 'input',
        name: 'testing',
        message: 'What are the next steps for testing?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please provide future testing plans!');
                return false;
            }
        }
    },

    {type: 'checkbox',
        name: 'licensing',
        message: 'Please select a project license.',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must select an option.');
                return false;
            }
        }
    },


    {type: 'input',
        name: 'email',
        message: 'Would you like to include your email to the ReadME?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};


// Function call to initialize app
init();