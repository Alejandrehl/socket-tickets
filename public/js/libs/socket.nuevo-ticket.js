// Comando para establecer la conexión
const socket = io();

socket.on("connect", () => {
  console.log("Client connected to the server");
});

socket.on("disconnect", () => {
  console.log("Client disconnected from server");
});
