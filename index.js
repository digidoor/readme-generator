// TODO: Include packages needed for this application
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is the name of the project?',
		name: 'projectName'
	},
	{
		type: 'input',
		message: 'What\'s up?',
		name: 'license'
	},
	{
		type: 'input',
		message: 'whats down?',
		name: 'var3'
	},
	{
		type: 'input',
		message: 'whats left',
		name: 'left'
	}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
	return writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init()
{
	inquirer.prompt(questions)
		.then( responses => writeToFile("README.out", generateMarkdown(responses)))
		.then( () => console.log("Successfully wrote ReadMe file") )
		.catch( err => console.error(err) );
}


// Function call to initialize app
init();
