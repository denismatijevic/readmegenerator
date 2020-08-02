// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![${data.licenseType}](https://img.shields.io/badge/License-${encodeURI(data.licenseType)}-blue.svg)

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
       
  ## Contribution
  ${data.contributing}
    
  ## Tests
  ${data.tests}
  
  ## License
  This application is covered under the ${data.license} license.

  ## For Questions
  http://www.github.com/${data.github}
  If you have any questions about this application contact ${data.email}

`;
}

module.exports = generateMarkdown;
