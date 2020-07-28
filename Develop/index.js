const inquirer = require('inquirer');
const fs = require('fs');
const specialchar = "!#$%&()*+,./:;<=>?@^[\\]^_`{|}~".split("");

// const api = require('./utils/api.js')
// const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
inquirer.prompt([
    {
        type: 'input',
        name: 'user',
        message: "What is your GitHub username?",

        validate: user => {
            if (user.length < 1 && user.length > 39) {
                return "User name must be between 1 and 39 characters, please try again.";
            }
            else if (user.startsWith("-", 0)) {
                return "Username cannot start with a dash";
            }
            // else if (user.length.includes(specialchar)) {
            //     return "Username cannot contain special characters, only alpha/numeric and dashes...please try again";
            // }
            else {
                //all validation checks passed
                return true;
            }
        }
    },
    {
        type: 'password',
        message: 'Please enter your password',
        name: 'secretcode',
        validate: secretcode => {
            if (secretcode.length < 8) {
                return "Password is too short."
            }
            else if (secretcode.length > 32) {
                return "Password is too long."
            }
            else {
                return true;
            }


        }

    } 
    // {
    //     type: 'input',
    //     message: 'Please enter your project title',
    //     name: 'projTitle',
    //     validate: projTitle => {
    //         if (projTitle.length < ) {
    //             return "Password is too short."
    //         }
    //         else if (secretcode.length > 32) {
    //             return "Password is too long."
    //         }
    //         else {
    //             return true;
    //         }


    //     }

    // }
    // {
    //     type: 'input',
    //     name: 'gitrepo',
    //     message: 'What is your repository name?'
    //     validate: await api.getUser(user, gitrepo)
    //         if(!user) {
    //         console.error('Repo not found!')
    //         } else {
    //         console.log(`${ Object.fullName} found!`)
    //         }

    // }


]).then(response => {
    console.log(response.user);
    console.log(response.august);

    fs.writeFile("readme.md", JSON.stringify(response, null, 2), 'utf8', err => {
        if (err) return console.log(err);
        return console.log("We finished writing the file.");
    })
});

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


// with the title of your project and 
// sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions