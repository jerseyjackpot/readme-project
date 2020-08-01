
// const usage =(info)=>{
//   if(info !== 'None'){
//     return `This project is licensed under ${info} license.`;
//   }
//   return '';
// }

// function to generate markdown for README
const generateMarkdown = (profileData) => {
  
  const badgeLicense = profileData.license.replace(/\s/g, '%20'); 
  
  return `
# ${profileData.projTitle}

![GitHub license](https://img.shields.io/badge/license-${badgeLicense}-blue)

## Description 

${profileData.description}

## Table of Contents 

* [Installation](#Installation)

* [Usage](#Usage)

* [Tests](#Tests)

* [Questions](#Questions)


## Information for use and installation

### Installation 

${profileData.instruct}

### Usage 

${profileData.usage}

## License 

${profileData.license}

### Contributing 

${profileData.guidelines}

### Tests 
To run, please install locally and type the following the command:

${profileData.test}

### Questions 

If you have any questions about the repo, open an issue or contact ${profileData.user} directly at ${profileData.email}.
You can also visit my [Github] (https://github.com/${profileData.gitrepo}) 

  `;
}

module.exports = {
  generateMarkdown : generateMarkdown
}
