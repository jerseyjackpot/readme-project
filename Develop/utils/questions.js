const questionsArr = [{
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
        else {
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
            return "Password is too short.";
        }
        else if (secretcode.length > 32) {
            return "Password is too long.";
        }
        else {
            return true;
        }
    }
},
{
    type: 'input',
    message: 'Please enter your project title',
    name: 'projTitle',
    validate: projTitle => {
        if (projTitle.length) {
            return true;
        }
        else {
            return "Title is too short";
        }
    }
},
{
    type: 'input',
    name: 'gitrepo',
    message: 'What is your repository name?',
    validate: (gitrepo) => {
        if (gitrepo.length) {
            return true;
        } 
        else {
            return 'Repo name invalid, please try again!';
        }
    }    
},
{
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
    validate: (description) => {
        if (description.length) {
            return true;
        } 
        else {
            return 'Please enter a detailed description of the project.';
        }
    }    
},
{
    type: 'input',
    name: 'instruct',
    message: 'Please provide installation instructions:',
    validate: (instruct) => {
        if (instruct.length) {
            return true;
        } 
        else {
            return 'Please provide installation instructions.';
        }
    }    
},
{
    type: 'input',
    name: 'usage',
    message: 'What can this project be used for?',
    validate: (usage) => {
        if (usage.length) {
            return true;
        } 
        else {
            return 'Please provide usage information.';
        }
    }    
},
{
    type: 'list',
    name: 'license',
    message: 'Which License is this project covered under?',
     choices: [
                "MIT",
                "APACHE 2.0",
                "GPL 3.0",
                "None",
            ]
},
{
    type: 'input',
    name: 'guidelines',
    message: 'What does the user need to know about contributing to the repo?',
    validate: (guidelines) => {
        if (guidelines.length) {
            return true;
        } 
        else {
            return 'Please provide complete contributor information for the repo.';
        }
    }    
},
{
    type: 'input',
    name: 'test',
    message: 'What command should be run to test?',
    validate: (test) => {
        if (test.length) {
            return true;
        }
        else {
            return 'Please provide test commands.';
        }
    }
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    validate: emailInput => {
        return (/^.+@.+\..+$/gi.test(emailInput) ? true : `That's not an email!`)
    }
}
];

module.exports = questionsArr; 
