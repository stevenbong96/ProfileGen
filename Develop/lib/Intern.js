// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Create constructor function
function Intern(internName, internID, internEmail, school){
    this.internName = internName;
    this.internID = internID;
    this.internEmail = internEmail;
    this.school = school;
    this.getSchool = () => {
        return this.school
    }
    this.getRole = () => {
        return "Intern"
    }
}

// Exports this file
module.exports = Intern;