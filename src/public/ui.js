import { saveNote, deleteNote, getNoteByID, updateNote } from "./sockets.js"

const noteList = document.querySelector("#notes")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
let savedId = ""
const noteUI = note => {
    const div = document.createElement('div')
    div.innerHTML = ` 
    <div class="card card-body rounded-0 animate__animated animate__fadeInUp">
        <div class="d-flex justify-content-between" >
          <h1>${note.title}</h1>
           <div>
            <button class="delete btn btn-danger" data-id="${note._id}">Delete</button>
            <button class="update btn btn-secondary" data-id="${note._id}">Update</button>
           </div>
        </div>
          <p>${note.description}</p>
    </div>
    


  
    `
    const btnDelete = div.querySelector(".delete")
    const btnUpdate = div.querySelector(".update")
    btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id))
    btnUpdate.addEventListener('click', e => getNoteByID(btnUpdate.dataset.id))
    console.log(btnDelete)
    return div
}
export const renderNotes = notes => {
    noteList.innerHTML = ""
    notes.forEach(note => noteList.append(noteUI(note)));

}
export const onHandleSubmit = (e) => {

    e.preventDefault()
    if (savedId) {
        updateNote(savedId, title.value, description.value)
    } else {
        console.log("subnit")
        saveNote(title.value, description.value)
    }
    savedId = ""
    title.value = ""
    description.value = ""
}

export const appendNote = note => {
    noteList.append(noteUI(note))
}

export const fillform = note => {
    title.value = note.title
    description.value = note.description
    savedId = note._id
}

