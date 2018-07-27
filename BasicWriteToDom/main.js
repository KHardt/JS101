
//Part1: p
const addToDom = document.querySelector(".article_header");
addToDom.textContent = "Welcome to the Klausinhagen blog";



//Part2:

const allHeaders = document.querySelectorAll(".article_header")
allHeaders.className = "important";


//test1 to see what is getting hit: NOTE CSS file for testing purposes to see that class changes actually DID something.
/*var x = document.querySelectorAll(".article_header");
    x[0].style.backgroundColor = "red";*/


//sanity test2: it's one!
var test1 = document.querySelectorAll(".important").length
console.log(test1)
//sanity test3: it's one!
//will need to do a loop or specific to each one- classname will not copperate if accessing a node-

myNodeList = document.querySelectorAll(".article_header")
for (var i = 0; i < myNodeList.length; i++) {
    var item = myNodeList[i]; 
    item.className += " important";
    console.log(item)
    // 
  }

//final notes. Since there were TWO underscores for the second article_header class (article__header) which I missed- the node list was coming back one in my test2. and in test3 originally. BigSib caught that. 
//i could of opted to change each one indiviually but decided to utilize the loop to practice going over the node list and querySelectorAll. 
