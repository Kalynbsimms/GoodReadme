
const fs = require('fs')

const inquirer = require('inquirer')






// array of questions for user
const questions = () => {
    inquirer
        .prompt([{
            type: 'input',
            name: 'title',
            message: 'What would you like your title to be?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please Describe the project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installation is needed for your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide the usage information for your project?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What testing was completed?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which type of license does your application use?',
            choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
        }
        ])
        .then(res => {
            console.log(res.title)
            console.log(res.description)
            console.log(res.installation)
            console.log(res.usage)
            console.log(res.contribution)
            console.log(res.test)
            console.log(res.github)
            console.log(res.email)
            console.log(res.license)


            let data = `
# Title: ${res.title}
![badge](https://img.shields.io/badge/license-${res.license}-blue.svg)
-------
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description:
${res.description}
## Installation:
${res.installation}
## Usage:
 ${res.usage}
## Contributing:
${res.contribution}
## Tests:
${res.test}
## License:
${res.liscense}
## Questions:
Github Username: [${res.github}](https://github.com/${res.github})
Contact me via email at: ${res.email}`


            fs.writeFile('newreadme.md', data, (err) => {
                if (err) { console.log(err) }
                console.log('File Created!')
            })



        })
        .catch (err => {
            console.log(err)
        })
}
questions()






    // ;

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
