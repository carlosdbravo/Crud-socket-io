import { loadnotes, onNewNote, onSelected } from "./sockets.js"
import { onHandleSubmit, renderNotes, appendNote, fillform } from "./ui.js"
onNewNote(appendNote)
loadnotes(renderNotes)
onSelected(fillform)

const noteForm = document.querySelector("#noteForm")
noteForm.addEventListener("submit", onHandleSubmit)