let colors = ["red", "blue", "green", "purple", "orange"];

colors.forEach((item) => {  //practice forEach
    let newColorString = "I like this color " + item;
    console.log(newColorString);
})

colors.forEach((item, index) => {  //items= items in the array, index= which one
    let newColorString = index + "I like this color " + item;
    console.log(newColorString);
})

//means same thing:
for (let i = 0; i < colors.length; i++) {
    let newColorString = i + " I like" + colors[i]
    console.log(newColorString)
}

let reverseColors = colors.map((color) => {
    let wordArray = color.split("");
    let reverseArray = wordArray.reverse();
    return reverseArray.join("");
})
console.log("reverseColor", reverseColors)


//method to write to DOM
const colorReverse = (color) => {
    let reverse = color.split("").reverse().join("");
    return `<li>${reverse}</li>`
}

let reversedColorsList = ``;
let reversedColors = colors.map((color) => {
    reversedColorsList += colorReverse(color);
})

let reversedNamesList = ``;
let names = ["Deborah", "Nick", "Klaus"]

let reversedNames = names.map((str) => {
    reversedNamesList += colorReverse(str)
})

document.getElementById("colors").innerHTML = reversedColorsList;
document.getElementById("names").innerHTML = reversedNamesList;

//filter method
let threeLetters = colors.filter((taco) => {  //wtf is taco?
    return taco.length === 3;
})

console.log("3letter colors", threeLetters)
