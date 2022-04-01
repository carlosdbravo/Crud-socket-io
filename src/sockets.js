const Note = require("./models/Note")

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("cliente is conencted")
        const emitNotes = async () => {
            notes = await Note.find()
            io.emit("server:loadnotes", notes)
        }
        emitNotes()
        socket.on("client:savenote", async data => {
            const newNote = new Note(data)
            const savedNote = await newNote.save()
            socket.emit('server:savenote', savedNote)
            console.log(savedNote)
        })
        socket.on('client:deletenote', async (id) => {
            await Note.findByIdAndDelete(id)
            emitNotes()
        })
        socket.on('client:getNoteByID', async (id) => {
            const note = await Note.findById(id)
            io.emit('server:selectednote', note)
        })
        socket.on('client:updatenote', async (updatedNote) => {
            await Note.findByIdAndUpdate(updatedNote._id, {
                title: updatedNote.title,
                description: updatedNote.description
            })
            emitNotes()
        })
    })

}
