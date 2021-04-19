
//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const generateHTML = require("./utils/generateHTML.js");




function promptQuestions(answers) {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the team manager's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team manager's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber',
        },

    ]).then (function(newEmployee) {
        inquirer.prompt([
            {
                type: 'list',
                message: 'What type of employee would you like to add?',
                choices: ['Engineer', 'Intern', "I don't want to add any more employees"],
                name: 'addEmployee',
            },
        ]);
    
        if (newEmployee.addEmployee === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the engineer's name?",
                    name: 'name',
                },
                {
                    type: 'input',
                    message: "What is the engineer's employee ID?",
                    name: 'id',
                },
                {
                    type: 'input',
                    message: "What is the engineer's email address?",
                    name: 'email',
                },
                {
                    type: 'input',
                    message: "What is the engineer's GitHub username?",
                    name: 'github',
                },
            ]);

            newEmployee();

        } else if (newEmployee.addEmployee === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the intern's name?",
                    name: 'name',
                },
                {
                    type: 'input',
                    message: "What is the intern's employee ID?",
                    name: 'id',
                },
                {
                    type: 'input',
                    message: "What is the intern's email address?",
                    name: 'email',
                },
                {
                    type: 'input',
                    message: "What is the intern's school?",
                    name: 'school',
                },
            ]);

            newEmployee();

        } else {
            console.log("Game Over");
        }
    });


        
    
}


promptQuestions();