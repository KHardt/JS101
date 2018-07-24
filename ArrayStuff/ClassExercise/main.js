//console.log("wasszuuuppp~!")

let softDrinks = ["Coke", "Sprite", "Orange", "ColdBrew", "CrackJuice"];

console.log(softDrinks.length) //actual number
console.log(softDrinks.indexOf("ColdBrew")) //starts at 0

console.log("softDrinks string", softDrinks.toString())

console.log("softDrinks join", softDrinks.join("whatever"))

let hotDrinks = ["coffee", "hotCrackJuice", "Latte"]

console.log("concat", softDrinks.concat(hotDrinks, softDrinks))

let allDrinks = softDrinks.concat(hotDrinks, softDrinks)

console.log(softDrinks[0]);
console.log(softDrinks.shift())
console.log(allDrinks.pop())

allDrinks.push("improved Crack Juice")
console.log("all drinks", allDrinks)
console.log("unshift", allDrinks.unshift("Latte"), allDrinks) //puts it at the beginning. Push puts at end. Shift takes it out?

console.log("shift", allDrinks.shift("Latte"), allDrinks) //puts it 

console.log("softdrinks.splice(1 ,2)", softDrinks.splice(1, 2))

softDrinks.splice(1, 0, "Diet Cherry Coke")
console.log(softDrinks)

let newArray = softDrinks.slice(1, 2)
console.log(newArray)
