const { config } = require("dotenv")
config()
const MONGODN_URI = process.env.MONGODN_URI

module.exports.MONGODN_URI = MONGODN_URI