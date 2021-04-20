
//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
// const generateHTML = require("./utils/generateHTML.js");


let employeeArray = [];

const promptQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'nameManager',
        },
        {
            type: 'input',
            message: "What is the team manager's employee ID?",
            name: 'idManager',
        },
        {
            type: 'input',
            message: "What is the team manager's email address?",
            name: 'emailManager',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumberManager',
        },
        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more employees"],
            name: 'addEmployee',
        },
    ])
    .then(answer => {
        const manager = new Manager(answer.nameManager, answer.idManager, answer.emailManager, answer.officeNumberManager,);
        employeeArray.push(manager);
        
        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log('Game Over');
            console.log(employeeArray);
            return;
        }
    })
};

promptQuestions();

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'nameEngineer',
        },
        {
            type: 'input',
            message: "What is the engineer's employee ID?",
            name: 'idEngineer',
        },
        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: 'emailEngineer',
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'githubEngineer',
        },
        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more employees"],
            name: 'addEmployee',
        },
    ])
    .then(answer => {
        const engineer = new Engineer(answer.nameEngineer, answer.idEngineer, answer.emailEngineer, answer.githubEngineer);
        employeeArray.push(engineer);

        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log('Game Over');
            console.log(employeeArray);
            return;
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'nameIntern',
        },
        {
            type: 'input',
            message: "What is the intern's employee ID?",
            name: 'idIntern',
        },
        {
            type: 'input',
            message: "What is the intern's email address?",
            name: 'emailIntern',
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'schoolIntern',
        },
        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more employees"],
            name: 'addEmployee',
        },
    ])
    .then(answer => {
        const intern = new Intern(answer.nameIntern, answer.idIntern, answer.emailIntern, answer.schoolIntern);
        employeeArray.push(intern);

        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log('Game Over');
            console.log(employeeArray);
            return;
        }
    })
};

