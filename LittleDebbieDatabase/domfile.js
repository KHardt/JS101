const populateButton = document.getElementById("popDB");
populateButton.addEventListener("click", populateDB)
    //document.getElementById("test").innerHTML = "";

const loadingButton = document.getElementById("loadDB");
loadingButton.addEventListener("click", loadDB)//can only have one argument


let addStuff = document.querySelector("#data")

function printToDom (dataStuff) {
    addStuff.innerHTML = ""; //clears the data
    for (let i = 0; i < dataStuff.length; i++) {
    addStuff.innerHTML +=
    `<div>
    <h2>${dataStuff[i].type}</h2>
    <h3>Flavor: ${dataStuff[i].flavor}</h3>
    <h3>After Affect: ${dataStuff[i].afterAffect}</h3>
    <h3>Death Count: ${dataStuff[i].amount}</h3>
    </div>` 
    
    }
    

}



/*
const loadDatabasePersonal = function (localStorageKey) {
    
    const databaseString = localStorage.getItem(localStorageKey)

    
    return JSON.parse(databaseString)
} 

let data = loadDatabasePersonal("NicolasCageDBPersonal") */