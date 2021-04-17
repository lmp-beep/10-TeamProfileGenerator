

// Employee ask name, id, email
// Employee getRole() returns 'Employee'
// getName()
// getId()
// getEmail()
// getRole() - returns Employee

// Manager extends Employee
// ask name, id, email plus officeNumber
// Manager getRole() overwrites Employee getRole() to return 'Manager'
// getName()
// getId()
// getEmail()
// getRole() - returns Manager
// getOfficeNumber()

// Engineer extends Employee
// ask name, id, email plus githubUserName
// Engineer getRole() overwrites Employee getRole() to return 'Engineer'
// getName()
// getId()
// getEmail()
// getRole() - returns Engineer
// getGithub()

// Intern extends Employee
// ask name, id, email plus school
// Intern getRole() overwrites Employee getRole() to return 'Intern'
// getName()
// getId()
// getEmail()
// getRole() - returns Intern
// getSchool()


//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require("./utils/generateHTML.js")

const questions = [
    {
        type: 'list',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role',
        // 
    },
    {
        type: 'input',
        message: "What is the ${name.role}'s name?",
        name: 'name',
        // 
    },
    {
        type: 'input',
        message: "What is the ${name.role}'s id?",
        name: 'id',
        // 
    },
    {
        type: 'input',
        message: "What is the ${name.role}'s email?",
        name: 'email',
        // 
    },

    {
        type: 'input',
        message: "What is the Team Manager's office number?",
        name: 'officeNumber',
        // for Manager only
    },
    {
        type: 'input',
        message: "What is the Engineer's GitHub username?",
        name: 'github',
        // for Engineer only
    },
    {
        type: 'input',
        message: "What is the Intern's school?",
        name: 'school',
        // for Intern only
    },
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        choices: ["Yes, I have more employees on my team!", "No, that's everybody!"],
        name: 'moreEmployees',
    },
];

//Function to initialize app
async function init() {
    inquirer.prompt(questions)

    // if "Yes, I have more employees on my team" => inquirer.prompt(questions)

    // else "No" => generateHTML
    .then((data) => {
        console.log(data);
        fs.writeFile("MyTeam.html", generateHTML(data), (err) =>
        err ? console.error(err) : console.log("Success!!")
        )
    })
};

// Function call to initialize app
init();

