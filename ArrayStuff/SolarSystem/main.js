/*let colors = ["red", "blue", "green", "purple", "orange"];

colors.forEach((item) => {  //practice forEach
    let newColorString = "I like this color " + item;
    console.log(newColorString);
}) */

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");

planets.forEach((item) => {
    let planetString = " this is planet " + item;
    console.log(planetString);
    planetEl.innerHTML += `<li>${planetString}</li>`
})

/*
let reverseColors = colors.map((color) => {
    let wordArray = color.split("");
    let reverseArray = wordArray.reverse();
    return reverseArray.join("");
})
console.log("reverseColor", reverseColors)
*/

let newMapArray = planets.map((planet) => {
    //let planetArray = planet.split("");
    //let upperArray = planetArray.toUpperCase();
    //return upperArray.join("");
    return planet.toUpperCase();
})
console.log(newMapArray)
/* function myFunction() {
    x = document.getElementById("demo")
    x.innerHTML = numbers.map(Math.sqrt);
    */
   /*function toUpperStuff() {
       x = document.getElementById("planets");
       x.innerHTML = planets.map.toUpperCase;
   }
   toUpperStuff()*/
/*let addUpper = planets.map((toUpperCase) => {
    console.log(addUpper);
});*/
//addUpper(addUpper);





