
const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(role, name, id, email, school) {
        super(role, name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;


// Employee ask name, id, email
// Employee getRole() returns 'Employee'
// getName()
// getId()
// getEmail()
// getRole() - returns Employee

// Intern extends Employee
// ask name, id, email plus school
// Intern getRole() overwrites Employee getRole() to return 'Intern'
// getName()
// getId()
// getEmail()
// getRole() - returns Intern
// getSchool()