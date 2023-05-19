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
		return `\n* [license](#license)\n`;
	return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
	if(license != "None")
		return `## License

This project is licensed under the ${license} license.`;
	return "";
}

function screenShotSection( isScreen, screenName )
{
	if(!isScreen)
		return "";
	return `## Here's what it looks like:
![screenshot](${screenName}?raw=true "demo")`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.projectName}
## Description
${data.desc}

[license info](#license)

${screenShotSection( data.screenshot, data.screenfile )}
## Installation
To install dependencies, run the following:
\`\`\`bash
${data.install}
\`\`\`
## Usage
${data.usage}
## Questions or Comments?
Simply open an issue in this repo.
Find me at [${data.github}](https://github.com/${data.github}/).
${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
