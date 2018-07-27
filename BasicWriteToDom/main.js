//let myCost = 3/1.5;
//console.log(myCost);

/*let phrase = "The quick brown fox";

let newStuff = `<h2>My Favorite Poems of Ice Cream</h2>
                <p>${phrase}</p>
                <h3>By Brenda Long</h3>`;

console.log(newStuff) */

const addToDom = document.querySelector(".article_header");
addToDom.textContent = "Welcome the Klausinhagen blog";

const allHeaders = document.querySelectorAll(".article_header", "div")
allHeaders.className = "article_header.important" 

//test to see what is getting hit:
/*var x = document.querySelectorAll(".article_header");
    x[0].style.backgroundColor = "red";*/

var test1 = document.querySelectorAll(".article_header").length
console.log(test1)

const test2 = document.querySelector("div")//.querySelectorAll(".article_header")
test2.className = "article_header.important" 

//notes to ask- can a class name be with spaces like article_ header importnant?