
//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Imported 
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");



let employeeArray = [];

const promptQuestions = () => {
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
        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more employees"],
            name: 'addEmployee',
        },
    ])
    .then(answer => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        employeeArray.push(manager);
        
        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log(employeeArray);
            generateHTML();

            return;
        }
    })
};



const engineerQuestions = () => {
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
        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more employees"],
            name: 'addEmployee',
        },
    ])
    .then(answer => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        employeeArray.push(engineer);
    
        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log(employeeArray);
            generateHTML();
          
            return;
        }
    })
};

const internQuestions = () => {
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
        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more employees"],
            name: 'addEmployee',
        },
    ])
    .then(answer => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        employeeArray.push(intern);
        
        if (answer.addEmployee === 'Engineer') {
            engineerQuestions();
        } else if (answer.addEmployee === 'Intern') {
            internQuestions();
        } else {
            console.log(employeeArray);
            generateHTML();
            
            return;
        }
    })
};


promptQuestions();


// ----------------------------Functions to build HTML-----------------------------

    function generateHTML() {

        const htmlArray = []
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
                `
                htmlArray.push(newHTML);

                for (let i = 0; i < employeeArray.length; i++) {
                    let object = `
                    <div class="col-4 py-4">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" id="name">${employeeArray[i].name}</li>
                                <li class="list-group-item" id="role">${employeeArray[i].role}</li>
                                <li class="list-group-item" id="id">EMPLOYEE ID: ${employeeArray[i].id}</li>
                                <li class="list-group-item" id="email">EMAIL: ${employeeArray[i].email}</li>
                    `

                    if (employeeArray[i].officeNumber) {
                        object += `
                        <li class="list-group-item" id="office-number">OFFICE NUMBER: ${employeeArray[i].officeNumber}</li>
                        <br><br>
                        <img id="icon" src="../assets/images/noun_Brain.png">
                        `
                    } 
                    if (employeeArray[i].github) {
                        object += `
                        <li class="list-group-item" id="github">GITHUB USERNAME: ${employeeArray[i].github}</li>
                        <br><br>
                        <img id="icon" src="../assets/images/noun_vr goggles.png">
                        `
                    } 
                    if (employeeArray[i].school) {
                        object += `
                        <li class="list-group-item" id="school">SCHOOL: ${employeeArray[i].school}</li>
                        <br><br>
                        <img id="icon" src="../assets/images/noun_Robot.png">
                        `
                    }

                    object += `
                        </ul>
                        </div>
                        </div>
                        `
                    htmlArray.push(object)
                }

                const htmlBottom = `
                        </div>
                        </div>
                        </body>
                        </html>
                        `
                    htmlArray.push(htmlBottom);
                

        fs.writeFile ("./dist/MyTeam.html", htmlArray.join(""), function(err) {
            err ? console.error(err) : console.log("Your team profile is being generated!")
        });
    };
    
    