const inquirer = require('inquirer');
fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
		type: "input",
		message: "What is your title for this project?",
        name: "title"
	},
	  {
		type: "editor",
		message: "What is your description for this project",
		name: "description"
	  },
	
	{
		  type: "editor",
		  message: "What are your installation instructions for the user?",
		  name: "installation"
	},
	{
		type: "editor",
		message: "What is your usage information for this project?",
		name: "usage_info"
	},
	{
		type: "editor",
		message: "Enter your contribution guidelines?",
		name: "contrib_guidelines"
	},
	{
		type: "editor",
		message: "What are your test Instructions?",
		name: "test_instructions"
	},
	{
		type: "list",
		message: "Choose your License:",
		name: "license",
		choices: ["MIT", "GNU", "Apache 2.0", "Boost 1.0", "PDDL"]
	},
	{
		type: "input",
		message: "What is your Github username?",
		name: "username"
	},
	{
		type: "input",
		message: "What is your email address?",
		name: "email"
	},
	{
		type: "input",
		message: "Preferred contact method",
		name: "contact"
	}
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    
    fs.writeFile("${fileName}.md", data, function(err) {
        if(err){
            console.log(err);
        }
    });
}

// function to initialize program
function init(questions) {
	inquirer.prompt(questions)
}

// function call to initialize program
init();
