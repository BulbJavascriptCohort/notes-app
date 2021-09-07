let query = decodeURIComponent(window.location.search)
const note_id = query.split("=")[1]


const note = JSON.parse( localStorage.getItem(note_id) )

console.log(note)

document.getElementById("note_id").textContent = note.author_id
document.getElementById("title").value = note.title
document.getElementById("content").value = note.content

saveButtonElement = document.getElementById("saveBtn")
saveButtonElement.addEventListener("click", (e) => {
    e.preventDefault()

    let title = document.getElementById("title").value
    let content = document.getElementById("content").value

    // let newNote = {
    //     ... note,
    //     title,
    //     content
    // }

    let newNote = {
        author_id : note.author_id,
        content : content,
        "date-published" : note["date-published"],
        id :  note.id,
        image :  note.image,
        title : title 
    }

    localStorage.setItem(note.author_id, JSON.stringify(newNote) )
})