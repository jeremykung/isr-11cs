// DOM Manipulation
// change Text
document.getElementById("title").innerText += "Rat KingZZZ"
document.getElementById("title").innerText += "BoyZ"

// change HTML
document.getElementById("title").innerHTML += "<h1>hi</h1><p>Para</p>"
document.getElementById("title").innerText += "<h1>hi</h1><p>Para</p>"

function handleButtonClick() {
    console.log('button clicked!')
}

const dom = {

    // properties
    age: 17,
    hair: 'curly',

    // methods
    sleep() {
        console.log('he is sleeping')
    },
    code() {
        console.log('he is coding!')
    },

}