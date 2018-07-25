/*Lightning Exercise Loop over every item in this array
```[45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]``` 
and return a new array that contains only the strings. Log out the result. */

/*planets.forEach((item) => {
    let planetString = " this is the planet " + item;
    console.log(planetString);
    planetEl.innerHTML += `<li>${planetString}</li>`
}) */
/*
let letterE = planets.filter((taco) => {
    return taco.includes("e")
})
console.log(letterE) */

const oldArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];

/*oldArray.forEach((item) => {
    let oldArrayString = "this is a string I think " + JSON.stringify(item);
    console.log(oldArrayString);
}) */

/*let newArray = oldArray.filter((taco) => {
    return taco.oldArray.includes("a");
})
console.log(newArray) */


const strings = oldArray.filter(item => {
    const isString = (typeof item === 'string')
    return isString;
})
document.getElementById("wrapper").innerHTML = `${strings.join(" ")}`
console.log(strings)

//typeof and join