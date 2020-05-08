const fs = require("fs")
const inquirer = require("inquirer");
const util = require("util")
const axios = require("axios")
const markDown = require("./utils/generateMarkdown")

const asyncWriteFile = util.promisify(fs.writeFile)

//GIVEN the developer has a GitHub profile and a repository
//WHEN prompted for the developer's GitHub username and repo specific information
//THEN a README for the repo is generated

//make a call to the GitHub API to retrieve their email and profile image

/*function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        }  
    ]).then(answers => {
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        axios.get(queryUrl).then(response => {console.log(response.data.avatar_url)})

    })
};*/

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        },
        {
            type: "input",
            message: "Enter your Project Title:",
            name: "title"
        }    
    ])
};

/*async function gitSearch() {
    try {
        const queryUrl = `https://api.github.com/users/clemsontigress`;
        const response = await axios.get(queryUrl);
        console.log(response.data.avatar_url)
        
    }
    catch (err) {
        console.log(err);
    };
};*/

function gitSearch(answers) {
   
    const queryUrl = `https://api.github.com/users/${answers.username}`;

       return axios.get(queryUrl)
        
        
    }

async function init() {
    console.log("Hello!")
    try{
    //get user input
    const answers = await promptUser();
    //use answers to generate readme template
    
    const response = await gitSearch(answers);
        //console.log(response.data)

    markDown(response, answers)
    //write to file
    //await asyncWriteFile("readme.md", data);
    //log success
    }

    catch(err) {console.log(err);
    }
};

init();
//promptUser();
//gitSearch();