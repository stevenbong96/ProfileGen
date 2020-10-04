// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Manager(managerName, managerID, managerEmail, managerPhone, officeNumber){
    this.managerName = managerName;
    this.managerID = managerID;
    this.managerEmail = managerEmail;
    this.managerPhone = managerPhone;
    this.officeNumber = officeNumber;
    this.getOfficeNumber = () => {
        return this.officeNumber
    }
    this.getRole = () => {
        return "Manager"
    }

}
// Exports this file
module.exports = Manager;
