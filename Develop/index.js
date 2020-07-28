const inquirer = require ('inquirer');
const fs = require('fs');

// const api = require('./utils/api.js')
// const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
inquirer.prompt ([
    {
        type: 'input',
        name: 'user',
        message: "What is your GitHub username?",
        
        validate: user => {
            if (user.length < 8 ){
                return "Username is too short.";           
            }
            else if (user.toLowerCase () != user){
                return "Username should be lowercase.";
            }
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
            if (secretcode.length < 8){
                return "Password is too short."
            }
            else if(secretcode.length > 32){
                return "Password is too long."
            }
            else {
                return true;
            }
            
            
        }
        
    }
    // {
    //     type: 'input',
    //     name: 'gitrepo',
    //     message: 'What is your repository name?'
    
    
    // },
    

]).then( response => {
    console.log(response.user);
    console.log(response.august);

    fs.writeFile("readme.md", JSON.stringify(response, null, 2), 'utf8', err =>{
        if(err) return console.log(err);
        return console.log ("We finished writing the file.");
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
