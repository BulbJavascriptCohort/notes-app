// console.log(notes)
const sizeOfNotes = notes.length
document.getElementById("number_of_notes").textContent = sizeOfNotes
let noteListElement = document.getElementById("notes")

// populate the localStorage
for( let i of notes ){
    localStorage.setItem(i.author_id, JSON.stringify(i))
}


// load the data from the localStorage
for( let j = 0; j < localStorage.length; j++ ){
// for(i of notes)
    let key = localStorage.key(j)
    let note = JSON.parse( localStorage.getItem(key) ) 
    
    let listElement = document.createElement("li")

    listElement.setAttribute("class", "list-group-item d-flex justify-content-between align-items-start")

    let divElement = document.createElement("div")
    divElement.setAttribute("class", "ms-2 me-auto")

    let innerDivElement = document.createElement("div")
    innerDivElement.setAttribute("class", "fw-bold")
    
    let innerSpanElement = document.createElement("span")

    let spanElement = document.createElement("span")
    spanElement.setAttribute("class", "badge bg-primary rounded-pill")

    innerDivElement.textContent = note.title
    innerSpanElement.textContent = note.content

    spanElement.textContent = note.author_id

    let buttonRow = document.createElement("div")
    buttonRow.setAttribute("class", "d-grid gap-2")
    let btnDelete = document.createElement("button")
    btnDelete.setAttribute("type", "button")
    btnDelete.setAttribute("class", "btn btn-danger")
    btnDelete.setAttribute("id", `delete${note.author_id}`)
    btnDelete.setAttribute("name", note.author_id)

    btnDelete.textContent = "Delete"

    let btnEdit = document.createElement("button")
    btnEdit.setAttribute("type", "button")
    btnEdit.setAttribute("class", "btn btn-success")
    btnEdit.setAttribute("id", `edit${note.author_id}`)
    btnEdit.textContent = "Edit"

    buttonRow.appendChild(btnEdit)
    buttonRow.appendChild(btnDelete)


    divElement.appendChild(innerDivElement)
    divElement.appendChild(innerSpanElement)
   
    listElement.appendChild(divElement)
    listElement.appendChild(spanElement)
    listElement.appendChild(buttonRow)


    noteListElement.appendChild(listElement)
}


document.addEventListener("click", function(amebo) {
    console.log(amebo.target);
    const buttonClicked = amebo.target.textContent
    if (buttonClicked === "Edit"){
        console.log(amebo.target.getAttribute("id"))
    }
    
    if (buttonClicked === "Delete"){
        // console.log(amebo.target.getAttribute("id"))
        let note_id = amebo.target.getAttribute("name")
        console.log(amebo.target.parentNode.parentNode.remove())
        localStorage.removeItem(note_id)
    }   
})

// step
// slap
// everything that happen is store inside e