// If Else
// Prompts
// length

if (9 > 5) {
    console.log("the condition is true!")
}

let student = "georg"
student = "alex"

if (student === "georg") {
    console.log("good!")
} else {
    console.log("bad!")
}

// = mutate (not a comparison)
// == loose comparison (it compares the value)
// != loose not equal to
// === strict comparison (it compares the value & data type)
// !== strict not equal to

let num = "4"

if (num !== 4) {
    console.log('true')
} else {
    console.log('false')
}

// Else if
const luckyNum = 5

if (luckyNum > 5) {
    console.log('number is big')
} else if (luckyNum < 5) {
    console.log('number is small')
} else if (luckyNum === 5) {
    console.log('lucky number!')
} else {
    console.log('error happened')
}

// Get input from user
const creditCard = prompt("Give me your credit card number")

console.log("credit card is: ", creditCard)


// length
const studentOne = "Matthieu"
const studentTwo = "Alex"
const studentThree = "Georg"
const studentFour = "Dom"

console.log(studentFour.length)

console.log(studentTwo)

/*

1. Make a program that prompts for a name, then stores it in a name variable. If the name is over 6 letters, console.log "name is long". If it is 6 or less letters, console.log "name is short"

2. The same the first problem, except now you will ask for two names instead of one. You should console.log "name ONE is long/short" and "name TWO is long/short"

3. Make a program that prompts the user for a random number. If the number is greater than 70, console.log "big number". If the number is less than 30, console.log "small number". If the number is between 30-70, console.log "medium number"

4. Make a program that asks for a NAME and also an AGE. If the AGE is over 18, console.log "NAME is allowed to drink". If the AGE is under 18, console.log "NAME is not allowed to drink". If the AGE is 70, console.log "NAME is too old to drink"

*/