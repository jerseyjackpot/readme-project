const inquirer = require(`inquirer`);


// array of questions for user
inquirer.prompt= ([
    {
        type: `input`,
        message: "What is your username?",
        name: `user`,
        validate: value => {
            if (user.length < 8 ){
                return "Username is too short.";           
            }
            else if(user.toLowerCase () != user){
                return "Username should be lowercase.";
            }
            else{
                //all validation checks passed
                return true;
            }
        }
    }
]).then( response => {
    console.log(response);
});

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
