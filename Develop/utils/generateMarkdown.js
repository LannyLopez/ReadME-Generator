const fs = require ('fs')

function generateMarkdown(data) {
  return `# ${data.title}
  ## Project Description
  ${data.description}
  ## Table of Contents
  1. [Description](#project-description)
  2. [Licenses](#license)
  3. [Installation](#installation)
  4. [Questions](#questions)
  5. [Github](#Github)

  ## License
  ![GitHub License](https://img.shields.io/badge/license-${data.Licenses}-blue.svg)
  Licensed under ${data.Licenses}

  ## Installation
  * Make Sure you have VsCode installed or any IDE
  * Once you have your IDE installed clone the project to your local machine 
  * Open your terminal and navigate to the repository and install required packages using NPM (follow this link for more info on installing NPM https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  * Once required packages have been installed run node index.js and enjoy!!!
  
  
  ## Questions
  For further question you can reach me at ${data.Email}

  ## Github
  To see the rest of my work checkout out my github at ${data.Github}

  ## Screenshots
  ![Image-Example](/utils/images/screenshot.png)

  ## Video Example
  ![Video-Example](/utils/video/screenCap.mov)

`;
}

module.exports = generateMarkdown;
