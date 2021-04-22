
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    
    getRole() {
        return this.role;
    }
}

module.exports = Employee;



// Employee ask name, id, email
// Employee getRole() returns 'Employee'
// getName()
// getId()
// getEmail()
// getRole() - returns Employee


