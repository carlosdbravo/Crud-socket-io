const socket = io();
export const loadnotes = (callback) => {
    socket.on("server:loadnotes", callback)
}
export const saveNote = (title, description) => {
    socket.emit("client:savenote", { title, description })
}
export const onNewNote = (callback) => {
    socket.on('server:savenote', callback)
}
export const deleteNote = id => {
    socket.emit("client:deletenote", id)
}
export const getNoteByID = id => {
    socket.emit("client:getNoteByID", id)
}
export const onSelected = (callback) => {
    socket.on('server:selectednote', callback)
}
export const updateNote = (id, title, description) => {
    socket.emit('client:updatenote', {
        _id: id,
        title,
        description
    })
}
//module.exports.loadnotes = loadnotes