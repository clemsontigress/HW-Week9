//const questions = [

//];

//function writeToFile(fileName, data) {
//}

//function init() {

//}

//init();


const fs = require("fs")
const inquirer = require("inquirer");
const util = require("util")
const axios = require("axios")

const asyncWriteFile = util.promisify(fs.writeFile)

//GIVEN the developer has a GitHub profile and a repository
//WHEN prompted for the developer's GitHub username and repo specific information
//THEN a README for the repo is generated

//make a call to the GitHub API to retrieve their email and profile image

inquirer
  .prompt({
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) 
    {
      const email = res.data.name;
      });

      

      //fs.writeFile("readme.md", repoNamesStr, function(err) {
        //if (err) {
          //throw err;
        //}
        //console.log("Success");
      });
   


  function init(){
      //get user input
      //use answers to generate read me template
      //write to file
      //log success
  }