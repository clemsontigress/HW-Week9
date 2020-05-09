const fs = require("fs")
const inquirer = require("inquirer");
const util = require("util")
const axios = require("axios")
const markDown = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);


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
        },
        {
            type: "input",
            message: "Enter your Project Description",
            name: "description"
        },
        {
            type: "input",
            message: "How do you install your app?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is the usage?",
            name: "usage"
        },
        {
            type: "input",
            message: "How do you test it?",
            name: "test"
        }
    ])
};


function gitSearch(answers) {

    const queryUrl = `https://api.github.com/users/${answers.username}`;

    return axios.get(queryUrl)

}

async function init() {
    console.log("Hello!")
    try {
        //get user input
        const answers = await promptUser();

        const response = await gitSearch(answers);

        //write to file
        const markDownText = markDown(response, answers)
        await writeFileAsync("readme.md", markDownText);
        console.log("success!")
    }

    catch (err) {
        console.log(err);
    }
};

init();
//promptUser();
//gitSearch();