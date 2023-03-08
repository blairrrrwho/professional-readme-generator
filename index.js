// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'confirm',
    name: 'Welcome.',
    message: "Welcome to blair's README Generator! The following prompts will ask you for some basic information reguarding your project. This input will be used to generate a README for this project. If the prompt asks for information that is irrelevant for said project, leave it blank and that section will be filtered out. Would you like to continue?",
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'Who is the author (please enter GitHub username)?',
  },
  {
    type: 'input',
    name: 'GitHubLink',
    message: 'Please enter your GitHub profile link.',
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What email address can be used to contact you?',
  },
  {
    type: 'input',
    name: 'Project',
    message: 'What is your project\'s name?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a brief description of your project. What purpose does it serve?',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What are the installation instructions for your application? Any dependencies?',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Describe the use of your application. How does your app work, what does it do, what are the instructions for use?',
  },
  {
    type: 'checkbox',
    name:'Technologies',
    message: 'What technologies/languages does your project use?',
    choices: ['JavaScript', 'HTML', 'CSS', 'Node.JS', 'Express.JS', 'Java', 'C', 'C#', 'C++', 'Python', 'Other', 'N/A']
  },
  {
    type: 'list',
    name: 'License',
    message: 'What type of license do you need for your project?',
    choices: [
      'MIT',
      'Apache',
      'IBM',
      'Mozilla',
      'Unlicensed',
    ]
  },
  {
    type: 'input',
    name: 'Contribution',
    message: 'What does the user need to know about contributing to this project?',
  },  
  {
    type: 'input',
    name: 'ApplicationTests',
    message: 'Does this project have any test conditions? If yes, please list them here.',
  },
];

// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data), (err) =>{
      if(err){
        console.log('Error Found Cound Not Save');
      } else {
        console.log('Success!!');
      }
    };
}

const init = (questions) => {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        const mdPageContent = generateMarkdown(response);
        console.log(mdPageContent);
        writeToFile ('myREADME.md', mdPageContent)
    })
    .catch((error) => {
      console.log(error);
    })
};

// Function call to initialize app
init(questions);