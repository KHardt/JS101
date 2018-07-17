/* 
//C IS FOR COOKIE "debugged this for loop":

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = "";

for (let y = 1; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
*/

/*
//CONJUNCTION FUNCTION ConjoinedWord not defined because can't reach into a function for definition. Just moved console.log to within the function:

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}
conjunction("Master", "Card")
*/

/*
//MOD SQUAD - fixed syntax errors-no comma after array, colon after series. Changed HTMLRep from const to let since it is building on that and needs to change. Does not need to be declared again after that. Document queryselector needs to be within the main object at the least.:
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        } 
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
       
    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation
}
*/

//SIMON SAYS - not sure what output is expected
/*
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 3) {
        const invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
    console.log(`There were ${k} invalid locations`)
} */
/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow. */
    
//LAMBDA LLLAMA- got this to work but needed to look at old work this time. Simplier way this time. Need the second function completed to give you something (return). Then console log the call. Then get out of the master function and call it. Should be all you need to get it to randomly generate the name per call.
    const llamaNamer = function () {
        const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
        const randomizer = Math.floor(Math.random() * 7)
    
        const namer = function () {
            const suffix = " the Llama"
            const name = possibleNames[randomizer];
            return name + suffix;
        }
        console.log(namer());
         
    }
llamaNamer();
        