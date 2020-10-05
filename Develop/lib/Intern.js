// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Create constructor function
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }

    getSchool () {
        return this.school
    }
    getRole () {
        return "Intern"
    }
}

// Exports this file
module.exports = Intern;