// console.log(notes)

const names = ["lola", "eben","iyin", "matthew", "tunde", "solomon", "joshua"]

// cooler => rice, plantain, moi moi, egg, beef, salad, beans
// DOM Manipulation

let galaElement = document.getElementById("gala")
let babsElement = document.getElementById("babs")
console.log(galaElement)
babsElement.textContent = "Go To Fajuyi"
console.log(babsElement.textContent)

console.log(galaElement.innerHTML)

let nameListElement = document.getElementById("bulbmates")
for(n of names){
    let listElement = document.createElement("li")
    listElement.textContent = n

    nameListElement.appendChild(listElement)
}
