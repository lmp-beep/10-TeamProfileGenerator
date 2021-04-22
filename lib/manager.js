
const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return this.role;
    }
}

module.exports = Manager;


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