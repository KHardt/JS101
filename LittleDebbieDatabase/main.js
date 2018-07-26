
/*saveDatabasePersonal(lilDebbie, "disgusting")

//load:

    /*const loadDatabasePersonal = function (localStorageKey) {
        const databaseString = localStorage.getItem(localStorageKey)
        return JSON.parse(databaseString)
    } 
    let data = lilDebbie("disgustingDB") */
function populateDB () {
    const lilDebbie = [
        {
        type: "Brownie",
        flavor: "all tastes the same- sweet",
        afterAffect: "diabetes",
        amount: "1 too many",
    },
    
    {
        type: "Donut",
        flavor: "really it tastes the same",
        afterAffect: "heart attack",
        amount: "too many"
    }
    ]
    

const stringifiedDatabase = JSON.stringify(lilDebbie) //stringify the DB
localStorage.setItem("lilDebbie", stringifiedDatabase) //stringiified name
    

}
function loadDB () {
const databaseString = localStorage.getItem("lilDebbie")
let dataStuff = JSON.parse(databaseString)//last var in the chain so need to use dataStuff
console.log(dataStuff)
printToDom(dataStuff)
//just call the other function since event listener can only hold one
    /*function justGross (type, flavor, afterAffect, amount) {
        this.type= type;
        this.flavor= flavor;
        this.afterAffect= afterAffect;
        this.amount= amount;*/
    
    }
    //let newSnack = new justGross("it doesn't matter anymore", "sugar", "weight gain", "enough for a family in Ethiopia")
    //console.log(newNasty)
    
    //lilDebbie.push(newSnack)




/*const loadDatabasePersonal = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
} 

let data = loadDatabasePersonal("lilDebbie")

}*/


//to do list: add functionality to automatically add to the array when creating
//add functionality to populate on the DOM