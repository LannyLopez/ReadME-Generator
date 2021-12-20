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
                console.log('please enter your name! ')
                return false
            }
        }
        
    }])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return questions()
}

// Function call to initialize app
init();
