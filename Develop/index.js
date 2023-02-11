// TODO: Include packages needed for this application

const  inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'imput',
        name: 'title',
        message: 'What is the title of your readme',
    },
    {
        type: 'imput',
        name: 'description',
        message: 'Describe what your program does',
    },
    {
        type: 'imput',
        name: 'Installation',
        message: 'give directions on installing your program',
    },
    {
        type: 'imput',
        name: 'usage',
        message: 'give directions on how to use your program',
    },
    {
        type: 'imput',
        name: 'contribution',
        message: 'give instructions on how to contribute',
    },
    {
        type: 'imput',
        name: 'test',
        message: 'give instructions on how to test this program',
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose your prefered license',
        choices:['MIT','IMB','Apache'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=> {
        fs.writeFileSync("./output/README.md", generateMarkdown (data))
    })
}

// Function call to initialize app
init();
