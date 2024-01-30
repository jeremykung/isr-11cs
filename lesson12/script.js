/*

Array Methods 💪🔥 // functions for arrays

pop()      removes last element of array
push()     adds to back of array
unshift()  adds to the front of array
slice()    removes element(s) by index
forEach()  does a function for each array
filter()   filters out elements of array
map()      manipulates and store as new array

*/

// element              0  1  2  3  4
const randomNumbers1 = [2, 5, 1, 4, 3]
const randomNumbers2 = [2, 5, 1, 7, 8]


randomNumbers1.forEach(function(currentElement) {
    console.log(currentElement)
})


// 1. Create an array of drinks, use forEach() to log "I like drinking _____" where ____ is each drink in the array

// 2. Using only the forEach() method, create a new array that is only numbers less than 5





// const filteredArray = randomNumbers1.filter(overThree)
// console.log(filteredArray)

// function overThree(element) {
//     return element > 3
// }




// filter the array so that it returns ONLY number 2








// for each element in the array, subtract 2 then multiply by 5
// then log the answer







// const result = randomNumbers1.slice(2, 4)
// console.log(result)     // [1, 4]

// Create a function called "replaceAllMiddleWithThree"
// this function cuts out all the middle elements except the first and last, and replaces the middle with just 3
// this function should work with any array that has 5 elements
// for example [1,2,3,4,5] => [1,3,5]
// for example [2,6,2,7,9] => [2,3,9]


// function removeOne(theArray) {
//     const firstPop = theArray.pop()
//     const secondPop = theArray.pop()
//     theArray.pop() // removes the 1
//     theArray.push(secondPop)
//     theArray.push(firstPop)
//     console.log(theArray)
// }

// removeOne(randomNumbers)
// removeOne(randomNumbers2)





// const firstPop = randomNumbers2.pop()
// const secondPop = randomNumbers2.pop()
// randomNumbers2.pop() // rm 1
// randomNumbers2.push(secondPop)
// randomNumbers2.push(firstPop)

// console.log(randomNumbers2)

// randomNumbers.pop()
// randomNumbers.push(7)
// randomNumbers.unshift("sergei")
