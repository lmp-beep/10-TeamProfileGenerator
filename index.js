
//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Imported 
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");


// const startHTML = require('./lib/generateHTML.js');
// const addEmployee = require("./lib/generateHTML.js");
// const endHTML = require("./lib/generateHTML.js");

// Path
// const DIST_DIR = path.resolve(__dirname, "dist");
// const distPath = path.join(dist_DIR, "MyTeam.html");


let employeeArray = [];

// function letsStart() {
//     startHTML();
//     promptQuestions();
    
// }

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
        const manager = new Manager(answer.nameManager, answer.idManager, answer.emailManager, answer.officeNumberManager);
        const employee = new Employee();
        employeeArray.push(manager);
        // addEmployee();
        
        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log(employeeArray);
            endHTML();

            // let generateTeam = generateHTML(employeeArray);
            // fs.writeFile(distPath, generateTeam, (err) =>
            // err ? console.error(err) : console.log("Success!!")
            // )

            return;
        }
    })
};



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
        // addEmployee();

        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log(employeeArray);
            endHTML();

            // let generateTeam = generateHTML(employeeArray);
            // fs.writeFile(distPath, generateTeam, (err) =>
            // err ? console.error(err) : console.log("Success!!")
            // )
            
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
        // addEmployee();

        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log(employeeArray);
            endHTML();

            // let generateTeam = generateHTML(employeeArray);
            // fs.writeFile(distPath, generateTeam, (err) =>
            // err ? console.error(err) : console.log("Success!!")
            // )
            
            return;
        }
    })
};


    startHTML();
    promptQuestions();


// ----------------------------Functions to build HTML-----------------------------
    function startHTML() {
        const newHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profiles</title>
    
            <!-- bootstrap cdn -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    
            <!-- google fonts -->
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet">
    
            <!-- custom css -->
            <link rel="stylesheet" href="../assets/style.css"/>
        </head>
        <body>
            <div class="container px-4" style="padding: 100px;">
                <div class="row py-4">
                
                `;
    
        fs.writeFile ("./dist/MyTeam.html", newHTML, function(err) {
            err ? console.error(err) : console.log("Your team profile is being generated!")
        });
    };
    
    
    
    // function addEmployee() {
    
    // };
    
    
    
    function endHTML() {
        const bottomHTML = `

                </div>
            </div>
        </body>
        </html>`;
    
        fs.appendFile("./dist/MyTeam.html", bottomHTML, function(err) {
            err ? console.error(err) : console.log("Your Team Profile is Ready!!!")
        });
    };
