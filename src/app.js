const express = require("express"); // traemos el modulo express
const socketio = require("socket.io"); // traemos el modulo de nuestra conexion en tiempo real
const http = require("http");
const morgan = require("morgan");
const path = require("path");
app = express(); // le pasamos los metodos del servidor app
/* 
 para poder pasar el servior  al conxion de web sockets
 debemos pasar el servidor de express como parametro para 
 crear un servidor el metodo http.
 */
const server = http.createServer(app);
//:conexion
const httpServer = server.listen(3000, () => {
    //* pedimos al servidor que escuhe el puerto 3000
    console.log("server on port 3000");
});
//:conexion io
const io = socketio(httpServer); //! io es la conexio del servidor con los clientes
require("./sockets")(io);//!mandamos la conexion con  los clientes a nuestro domumentos sockets.js el cual escuchara los eventos

//: conexion a la base de datos
const { connectDB } = require("./db");
connectDB();
app.use(express.static(path.join(__dirname, "public"))); // envia la carpeta public al navegador cada vez que un usuario entre
//:middleware
app.use(morgan("dev")); // este middle ware escha cada proceso que se ejecuta en el servidor
