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
		message: 'What license does it use?',
		name: 'license'
	},
	{
		type: 'input',
		message: 'Describe the project.',
		name: 'desc'
	},
	{
		type: 'input',
		message: 'How do you install the dependencies?',
		name: 'install'
	},
	{
		type: 'input',
		message: 'Describe the usage of the program.',
		name: 'usage'
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
		.then( responses => writeToFile("README.md", generateMarkdown(responses)))
		.then( () => console.log("Successfully wrote ReadMe file") )
		.catch( err => console.error(err) );
}


// Function call to initialize app
init();
