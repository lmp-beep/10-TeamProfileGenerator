
class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log('${this.name} is the ${this.role}, ID#${this.id}. /n You can contact ${this.name} at ${this.email}.');
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
        return "Employee";
    }
}

module.exports = Employee;



// Employee ask name, id, email
// Employee getRole() returns 'Employee'
// getName()
// getId()
// getEmail()
// getRole() - returns Employee


