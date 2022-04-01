const { connect } = require("mongoose")
const { MONGODN_URI } = require("./config")

const connectDB = async () => {
    try {
        await connect(MONGODN_URI)
        console.log("database is conected");
    } catch (error) {
        console.log(error);
    }
}
module.exports.connectDB = connectDB// de esta manera exportamos la funcion en js common