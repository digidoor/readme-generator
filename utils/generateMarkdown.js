// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)
{
	if(license != "None")
		return `![code license](https://img.shields.io/badge/license-${license}-blue.svg)`;
	return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)
{
	if(license != "None")
		return `\n* [code license](#${license})\n`;
	return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
	if(license != "None")
		return `## License

This project is licensed under the ${license}.`;
	return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.projectName}

## Description

${data.desc}

* [Installation](#installation)

To install dependencies, run the following:

\`\`\`bash
${data.install}
\`\`\`

## Usage

${data.usage}

${renderLicenseBadge(data.license)}

[test](#test)
[test](#Test)
[Test](#test)
[Test](#Test)

		AUUUUUGH
















[]: # (extra space for testing)




















# Test

`;
}

module.exports = generateMarkdown;
