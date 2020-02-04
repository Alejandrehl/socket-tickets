const fs = require("fs");

class Ticket {
  constructor(numero, escritorio) {
    this.numero = numero;
    this.escritorio = escritorio;
  }
}

class TicketControl {
  constructor() {
    this.ultimo = 0;
    this.hoy = new Date().getDate();
    this.tickets = [];

    let data = require("../data/data.json");
    const { ultimo, hoy } = data;

    if (hoy === this.hoy) {
      this.ultimo = ultimo;
      this.ticket = data.tickets;
    } else {
      this.reiniciarConteo();
    }
  }

  reiniciarConteo = () => {
    this.ultimo = 0;
    this.ticket = [];
    this.grabarArchivo();
  };

  siguiente = () => {
    this.ultimo += 1;
    let ticket = new Ticket(this.ultimo, null);
    this.tickets.push(ticket);
    this.grabarArchivo();

    return `Ticket ${this.ultimo}`;
  };

  getUltimoTicket = () => {
    return `Ticket ${this.ultimo}`;
  };

  atenderTicket = escritorio => {
    if (this.tickets.length === 0) {
      return "No hay tickets";
    }

    let numeroTicket = this.tickets[0].numero;
    this.tickets.shift();
  };

  grabarArchivo = () => {
    let jsonData = {
      ultimo: this.ultimo,
      hoy: this.hoy,
      tickets: this.tickets
    };

    let jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync("./server/data/data.json", jsonDataString);
  };
}

module.exports = TicketControl;
