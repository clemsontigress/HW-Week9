//const fs = require("fs")
const inquirer = require("inquirer");
//const util = require("util")
const axios = require("axios")

//const asyncWriteFile = util.promisify(fs.writeFile)

//GIVEN the developer has a GitHub profile and a repository
//WHEN prompted for the developer's GitHub username and repo specific information
//THEN a README for the repo is generated

//make a call to the GitHub API to retrieve their email and profile image

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        }  
    ]).then(answers => {console.log(answers.username)})
};


function gitSearch() {
    //try {
        const queryUrl = `https://api.github.com/users/clemsontigress`;
        axios.get(queryUrl).then(response => {console.log(response.data.avatar_url)})
        
    //}
    //catch (err) {
        //console.log(err);
    //};
};


//function init() {
    //console.log("Hello!")
    //try{
    //get user input
    //const response = await promptUser();
    //use answers to generate read me template
    //const queryUrl = `https://api.github.com/search/users?q=${response.username}`;
    //console.log(response)
    //const data = await gitSearch(queryUrl);
    //console.log(data)
    //const readMe = makeReadMe(answers)

    //write to file
    //await asyncWriteFile("readme.md", data);
    //log success
    //}

    //catch(err) {console.log(err);
   // }
//};

//init();
promptUser();
gitSearch();