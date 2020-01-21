const { io } = require("../server");
const TicketControl = require("../classes/ticket-control");

const ticketControl = new TicketControl();

io.on("connection", client => {
  console.log("Client connected");

  client.emit("sendMessage", {
    user: "Administrador",
    message: "Welcome to my App"
  });

  client.on("disconnect", () => {
    console.log("Client disconnected");
  });

  // Listen client
  client.on("sendMessage", (data, callback) => {
    client.broadcast.emit("sendMessage", data);

    // const { user, message} = data

    // if (user) {
    //     callback({ message: message})
    // } else {
    //     callback({ message: "¡No hay usuario en el request"})
    // }
  });
});
