
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
        author_id :  parseInt( localStorage.key(0) ) + 1,
        content : content,
        "date-published" : new Date().toLocaleString(),
        id :  Math.floor(Math.random() * 1000 ),
        image :  "",
        title : title 
    }

    localStorage.setItem(newNote.author_id, JSON.stringify(newNote) )
    window.location.href = "index.html"
})