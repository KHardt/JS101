
/*for (let i = 0; i < 100; i++) {
    const currentNumber = [i]

    if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
        console.log(currentNumber + "ChickenMonkey")
    }
    else if (currentNumber % 5 === 0) {
        console.log(currentNumber + "chicken") 

    }
    else if (currentNumber % 7 === 0) {
        console.log(currentNumber + "monkey")
    }
    
}
*/



const numbers = []
for (var i = 1; i <= 100; i++) {
    numbers.push(i);
}


for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]

    if (currentNumber % 7 === 0 && currentNumber % 5 ===0) {
        console.log(currentNumber + "ChickenMonkey") 
    }
    else if (currentNumber % 5 === 0) {
        console.log(currentNumber + "Chicken")
    }
    else if (currentNumber % 7 === 0) {
        console.log(currentNumber + "Monkey")
    }
    else if (currentNumber) {
        console.log(currentNumber)
    }

}