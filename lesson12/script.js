/*

Array Methods 💪🔥 // functions for arrays

pop()      removes last element of array
push()     adds to back of array
unshift()  adds to the front of array
slice()    removes element(s) by index
filter()   filters out elements of array
map()      manipulates and store as new array
forEach()  does a function for each array

*/
//                     0  1  2  3  4
const randomNumbers = [2, 5, 1, 4, 3]
const randomNumbers2 = [2, 5, 1, 7, 8]

const result = randomNumbers.slice(2, 4)
console.log(result)     // [1, 4]

// Create a function called "replaceAllMiddleWithThree"
// this function cuts out all the middle elements except the first and last, and replaces the middle with just 3
// this function should work with any array that has 5 elements
// for example [1,2,3,4,5] => [1,3,5]
// for example [2,6,2,7,9] => [2,3,9]


function removeOne(theArray) {
    const firstPop = theArray.pop()
    const secondPop = theArray.pop()
    theArray.pop() // removes the 1
    theArray.push(secondPop)
    theArray.push(firstPop)
    console.log(theArray)
}

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
