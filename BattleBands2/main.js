//instead of having each band have a variable I just called the function with the band name entered in new version.
//old version:
/*let bandNumber = 0;

const takeNumber = function (bandName) {
    bandNumber++; 
    return (`${bandNumber}  ${bandName}`)
};
   
const scum = takeNumber("Galactic Scum");
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under);  // This should print "2. Underdogs" in the console
*/

//new version: 
let bandNumber = 0;

const takeNumber = function (bandName) {
    bandNumber++; 
    console.log(`${bandNumber}  ${bandName}`)
};

takeNumber("Galactic Scum")
takeNumber("UnderPigs")
takeNumber("Psychobabies")
