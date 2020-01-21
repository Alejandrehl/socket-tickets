const socket = io();

socket.on("connect", () => {
    console.log("SocketIO Connected to the server")
})

socket.on("disconnect", () => {
    console.log("Connection with server lost")
})

// Enviar información
socket.emit("sendMessage", {
    user: "Alejandro",
    message: "¡Wake up early!"
}, res => {
    console.log(res.message)
})

// Escuchar información
socket.on("sendMessage", data => {
    console.log(data)
})