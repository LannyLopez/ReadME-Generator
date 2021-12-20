// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const generateMarkdown = require ('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your project title? (required) ',
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log('please enter your project name! ')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a Description of your project (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
            return true
            }
            else {
                console.log('You need to input a description of project! ')
                return false
            }
        }

    },
    {
        type: 'checkbox',
        name: 'Languages',
        message: 'What did you use create the app with ',
        choices: ['HTML', 'CSS', 'Javascript', 'Node', 'React', 'Java', 'Python',]
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Please provide a Link to your github account! (required)',
        validate: linkInput => {
            if (linkInput) {
                return true
            } else {
                console.log ('Please provide a link to your GitHub account! ')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Please provide your email! '
    },
    {
        type: 'checkbox',
        name: 'Licenses',
        message: 'What type of License will you be using',
        choices: ['MIT','GNU AGPLv3', 'Apache License 2.0','The Unlicense']
    },
    

    

]).then((data) => {
    console.log(data);
    var README = generateMarkdown(data);
    console.log(README);
    fs.writeFile("README.md", README, (err) => {
      if (err) throw err;
    });
  });
}
questions()
