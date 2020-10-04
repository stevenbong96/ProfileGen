// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Engineer(engineerName, engineerID, engineerEmail, github){
    this.engineerName = engineerName;
    this.engineerID = engineerID;
    this.engineerEmail = engineerEmail;
    this.github = github;
    this.getGithub = () => {
        return this.github
    }
    this.getRole = () => {
        return "Engineer"
    }
}

// Exports this file
module.exports = Engineer;