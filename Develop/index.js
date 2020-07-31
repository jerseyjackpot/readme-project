const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
const questionsArr = require('./utils/questions.js');

inquirer.prompt(questionsArr).then(responseObj => {
    // console.log(responseObj);
    const finishedMarkdown = generateMarkdown.generateMarkdown(responseObj);

    fs.writeFile('./readme.md', finishedMarkdown, err =>{
        if(err){
            console.log(err)
        } else {
            console.log('Great Success!')
        }
    });
})