// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (exclam) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < sentence.length; i++) {
        buildMeUp = (`${buildMeUp} ${sentence[i]}`);
        if ((i +1) % 3 === 0) {
            buildMeUp = (buildMeUp + exclam)
    }
    
    console.log(buildMeUp);
}
    
}
    
// Invoke the function and pass in the array
addExcitement("$")