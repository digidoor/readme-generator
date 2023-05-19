// TODO: Include packages needed for this application
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is the name of the project?',
		name: 'projectName',
	},
	{
		type: 'list',
		message: 'What license does it use?',
		choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
		name: 'license',
	},
	{
		type: 'input',
		message: 'Describe the project concept.',
		name: 'desc',
	},
	{
		type: 'input',
		message: 'How do you install the dependencies?',
		default: 'npm i',
		name: 'install',
	},
	{
		type: 'input',
		message: 'Describe the usage of the program.',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'Who is the author? (What\'s your github handle?)',
		name: 'github',
	},
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
