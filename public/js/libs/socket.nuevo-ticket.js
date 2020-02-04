// Comando para establecer la conexión
const socket = io();
const label = $("#lblNuevoTicket");

socket.on("connect", () => {
  console.log("Client connected to the server");
});

socket.on("disconnect", () => {
  console.log("Client disconnected from server");
});

socket.on("estadoActual", res => {
  label.text(res.actual);
});

$("#generate-new-ticket-button").click(() => {
  socket.emit("siguienteTicket", null, siguienteTicket =>
    label.text(siguienteTicket)
  );
});
