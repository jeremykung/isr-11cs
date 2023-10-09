// Objects
// group similar functionality under one object

const dannyWatch = {
    // properties
    color: 'metallic',
    material: 'stainless steel',
    statusScore: 6.5,

    // methods
    tellTime() {
        console.log('the time is NOW')
    },
    increaseGame() {
        console.log('u are slaying')
    },
    startConvo() {
        console.log('u just networked hard')
    }
}

console.log(dannyWatch.increaseGame())

// Create a new horse object. Give it 2 properties, and 2 methods. Make sure you can call each of them after.

// DOM - Document Object Model
// everything in your HTML page is under the document object

document.getElementById("secret").innerText = "don't tell ppl!"

// create a paragraph with a different id. use JavaScript to change the text