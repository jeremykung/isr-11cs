// Return Values
// Arrow Functions

// create a function that accepts a number parameter, then adds 2 to it. For example, you pass the function the argument of 5, and it adds to so it will console log 7

function addTwo(num) {
    const answer = num + 2
    document.write(answer)
    return answer
}

const newNum = addTwo(5)

// // regular function
// function greet(person) {
//     return `hi ${person}`
// }

// // arrow function
// const greet = (person) => {
//     return `hi ${person}`
// }

// // shorthand arrow function
// const greet = person => `hi ${person}`


// Getting input from user
const girlNumber = prompt("hey girl, what's ur number?")

function callHer() {
    console.log("calling..." + girlNumber)
    // new code here...

}
callHer()

// change the above function to see if the number is = to 8. If it is over 8 numbers or less than 8 numbers, console log "you got a fake number bro". if it is 8, say "nice".

