TODO: 
- filter out sections left blank during the question prompts -->
        done for all except license, technologies and questions
<!-- 
const checkTechnologies = (data) => {
   if(data.Technologies === "N/A") {
     return "";
   }
    else {
     return `## Technologies
 ${data.Technologies}`
    }
 } 
 -->

<!-- 
## Technologies
${data.Technologies} 
-->

<!-- 
const checkLicense = (data) => {
   if(data.License === "Unlicensed") {
     return "";
   }
    else {
     return `## License
 ${data.License}`
    }
 } 
 -->

^ old code / new code just in case it's needed 

  <!-- 
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions) -->
  ^ toc list 

- got the table of contents to not display a section if it is left blank OTHER THAN these (but have none options)
        - license, technologies


- re-source files so that everything is in the develop folder except for the actual readme
- questions to add: 
    - github repo link for the project
            type: 'input'
            name: 'GitHub',
            message: 'What is the GitHub Repository link?',
    - deployment link
            type: 'input',
            name: 'deploymentURL',
            message: 'What is your application's deployment URL?',
    - credits
    - features
    - github username: change to enter github profile link; take out username question



inquirer website notes: 

// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });





User Story: 
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

Acceptance Criteria: 
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


