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
    let planetString = " this is the planet " + item;
    console.log(planetString);
    planetEl.innerHTML += `<li>${planetString}</li>`
})



let newMapArray = planets.map((planet) => {
    return planet.charAt(0).toUpperCase() + planet.slice(1)
})
console.log(newMapArray)


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/



let letterE = planets.filter((taco) => {
    return taco.includes("e")
})
console.log(letterE)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

//copied straight out of mozilla..except I added the template lit to give spaces
const reducer = (accumulator, currentValue) => `${accumulator} ${currentValue}`;

console.log(words.reduce(reducer));

