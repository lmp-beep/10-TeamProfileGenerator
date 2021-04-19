
const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(role, name, id, email, githubUserName) {
        super(role, name, id, email);
        this.githubUserName = githubUserName;
    }
    getGithub() {
        return this.githubUserName;
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
// ask name, id, email plus githubUserName
// Engineer getRole() overwrites Employee getRole() to return 'Engineer'
// getName()
// getId()
// getEmail()
// getRole() - returns Engineer
// getGithub()