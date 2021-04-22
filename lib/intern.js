
const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return this.role;
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