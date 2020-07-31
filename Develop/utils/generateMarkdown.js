
// const usage =(info)=>{
//   if(info !== 'None'){
//     return `This project is licensed under ${info} license.`;
//   }
//   return '';
// }

// function to generate markdown for README
const generateMarkdown = (profileData) => {
  return `
# ${profileData.projTitle}

## INFO

## Description 

${profileData.description}

## Table of Contents 

* [Installation](#Installation)

* [Usage](#Usage)

* [Tests](#Tests)

* [Questions](#Questions)


### Installation 

${profileData.instruct}

### Usage 

${profileData.usage}

## License 

${profileData.license}

### Contributing 

${profileData.guidelines}

### Tests 
To run tests, run the command:

${profileData.test}

### Questions 

If you have any questions about the repo, open an issue or contact ${profileData.user} directly at ${profileData.email}.

  `;
}

module.exports = {
  generateMarkdown : generateMarkdown
}
