/*
1. Loops
2. While Loops
3. For Loops
4. forEach()
*/

// While loop
// goes forever until condition is false
let counter = 0

while (counter < 10) {
    console.log('hello fools!')
    counter = counter + 1
}

// For loops
// repeats something x number of times
for (i = 0; i < 10; i++) {
    console.log('i is', i)
    console.log('what is down')
}

// var i = 0
// create a variable called i, set it to 0

// i < 10
// condition for loop to run

// i++
// after running loop, i = i + 1

const enemiesCrushed = [
    'Math Test', 
    'Younger Sibling', 
    'Sister'
]

// make a for loop that will print out all the enemies I've crushed.

for (i = 1; i < 4; i++) {
    console.log(enemiesCrushed[i - 1])
}

// 1. create a list of enemiesThatCrushedMe
// 2. add 3 items
// 3. create a for loop that prints out those enemies in REVERSE order 

// create your own for loop that will repeat 7 times. inside the loop, say what your favorite crypto currency is.

for (i=0; i<5; i++) {
    document.querySelector(".loopOne").innerHTML += `A`
}
