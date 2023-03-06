// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== 'None') {
    return `![License](https://img.shields.io/badge/license-${License}-green.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== 'None') {
    return `[License](#License)`;
    }
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License !== 'None') {
    return `This project is licensed under the ${License} license.`;
    }
return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`project = ${data.Project}`)
  return `# ${data.Project}
  # ${renderLicenseBadge(data.License)}

  ## Table of Contents
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - ${renderLicenseLink(data.License)}
    - [Contribute](#Contribute)
    - [Tests](#Tests)
    - [Questions](#Questions)
    
  ## Description
    ${data.Description}
  
  ## Installation
    ${data.Installation}
    
  ## Usage
    ${data.UserKnowledge}
  
  ## License
    ${renderLicenseSection(data.License)}
  
  ## How to Contribute 
    ${data.Contributing}
  
  ## Tests
    ${data.Tests}
  
  ## Questions
    If you liked this project feel free to check out my other projects at ${data.Github}
    If you have any questions feel free to email me at  ${data.Email}
`;
}

module.exports = generateMarkdown;
