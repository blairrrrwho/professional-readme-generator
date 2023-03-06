// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// const { log } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'Project',
        message: 'What is your project\'s name?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Provide a brief description of your project?',
      },
      {
        type: 'list',
        name: 'License',
        message: 'What type of license do you need for your project?',
        choices: [
            'MIT',
            'Apache',
            'GPLv2',
            'GPLv3',
            'BSD 3-clause',
            'BSD 2-clause',
            'LGPLv3',
            'AGPLv3',
            'Unlicensed',
        ]
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What command should be ran to install dependencies?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What command should be ran to run tests?',
      },
      {
        type: 'input',
        name: 'UserKnowledge',
        message: 'What does the user need to know in order to use your repo?',
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'What does the user need to know about contributing to this project?',
      },
];


// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

const init = (questions) => {
    inquirer.prompt(questions) .then((response) => {
        console.log(response);
        const mdPageContent = generateMarkdown(response);
        console.log(mdPageContent);
        writeToFile ('myREADME.md', mdPageContent)
    })
};

// Function call to initialize app
init(questions);