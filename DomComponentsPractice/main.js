/*
Put an article DOM element in your index.html with the id attribute value of messages.
In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
Create five (5) section elements, each with a class of message, and with textContent of your choosing.
Using appendChild(), attach each message as a child to the messages element. */

//step1:
const article = document.createElement('article')
article.id = "messages"
console.log(article)

//step2:
const findArticle = document.querySelector("article")

//step3:
const createSection1 = document.createElement("section")
createSection1.className = "message";
createSection1.textContent = "SUP Aunty"
//console.log(createSection1)

const createSection2 = document.createElement("section")
createSection2.className = "message";
createSection2.textContent = "o it's annoying nephew"

const createSection3 = document.createElement("section")
createSection3.className = "message";
createSection3.textContent = "LOL"

const createSection4 = document.createElement("section")
createSection4.className = "message";
createSection4.textContent = "your dad is not your real father"

const createSection5 = document.createElement("section")
createSection5.className = "message";
createSection5.textContent = "that's not funny aunty"

article.appendChild(createSection1)
article.appendChild(createSection2)
article.appendChild(createSection3)
article.appendChild(createSection4)
article.appendChild(createSection5)

