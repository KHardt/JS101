let myCost = 3/1.5;
console.log(myCost);

let phrase = "The quick brown fox";

let newStuff = `<h2>My Favorite Poems of Ice Cream</h2>
                <p>${phrase}</p>
                <h3>By Brenda Long</h3>`;

console.log(newStuff)

let addToDom = document.getElementById("demo");
addToDom.innerHTML = newStuff;