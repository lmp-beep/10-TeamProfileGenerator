
const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;



// Employee ask name, id, email
// Employee getRole() returns 'Employee'
// getName()
// getId()
// getEmail()
// getRole() - returns Employee

// Engineer extends Employee
// ask name, id, email plus github
// Engineer getRole() overwrites Employee getRole() to return 'Engineer'
// getName()
// getId()
// getEmail()
// getRole() - returns Engineer
// getGithub()