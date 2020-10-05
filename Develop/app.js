const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var aggregateInfo = [];

function getInformation(){
    inquirer.prompt([
            {
                name:"addPosition",
                message:"Select position that you would like to put in the team",
                type:"list",
                choices:["Manager","Engineer", "Intern", "I don't want to add another member!"]
            },
            ]).then(function(basicInfo){
                // console.log(basicInfo.addPosition)
                if(basicInfo.addPosition === "Manager"){
                    inquirer.prompt([
                        {
                            name:"name",
                            message:"Who is your manager?"
                        },
                        {
                            name:"id",
                            message:"What's your manager ID number?"
                        },
                        {
                            name:"email",
                            message:"What's' your manager email address?"
                        },
                        {
                            name:"officeNumber",
                            message:"What's your manager office number?"
                        },
                    ]).then(function(managerResp){
                        // console.log(managerResp);
                        const manager = new Manager(managerResp.name, managerResp.id, managerResp.email, managerResp.officeNumber);
                        aggregateInfo.push(manager);
                        getInformation();
                    })
                } else if(basicInfo.addPosition === "Engineer"){
                    inquirer.prompt([
                        {
                            name:"name",
                            message:"What's the engineer's name?"
                        },
                        {
                            name:"id",
                            message:"What's the engineer's ID?"
                        },
                        {
                            name:"email",
                            message:"What's the engineer's email?"
                        },
                        {
                            name:"github",
                            message:"What's the engineer's Github username?"
                        },
                    ]).then(function(engineerResp){
                        // console.log(engineerResp);
                        const engineer = new Engineer(engineerResp.name, engineerResp.id, engineerResp.email, engineerResp.github);
                        aggregateInfo.push(engineer);
                        getInformation();
                    })
                } else if(basicInfo.addPosition === "Intern"){
                    inquirer.prompt([
                        {
                            name:"name",
                            message:"What's the intern's name?"
                        },
                        {
                            name:"id",
                            message:"What's the intern's ID?"
                        },
                        {
                            name:"email",
                            message:"What's the intern's email?"
                        },
                        {
                            name:"school",
                            message:"What's the intern's college name?"
                        },
                    ]).then(function(internResp){
                        // console.log(internResp);
                        const intern = new Intern(internResp.name, internResp.id, internResp.email, internResp.school);
                        aggregateInfo.push(intern);
                        getInformation();
                    })
                } else {
                    createHTML();
                }
            })
}
// 

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function createHTML(){
    fs.writeFile(outputPath, render(aggregateInfo), function(err){
        if(err){
            throw err
        }
        console.log("Success!!!")
    })
    return
}

getInformation();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
