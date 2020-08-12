
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
            liscenses: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
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
            console.log(res.liscense)
        })
};

questions()






    ;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
