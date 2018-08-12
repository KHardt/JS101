console.log("test")
const dataManager = require("./dataManager")

let APIManager = dataManager.getAllEntries

const employName = document.getElementById("employeeList")
employName.innerHTML = `<h2>Name: ${APIManager.Employee} </h2>`