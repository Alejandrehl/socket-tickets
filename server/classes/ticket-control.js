const fs = require("fs");

class TicketControl {
  constructor() {
    this.ultimo = 0;
    this.hoy = new Date().getDate();

    let data = require("../data/data.json");
    const { ultimo, hoy } = data;

    if (hoy === this.hoy) {
      this.ultimo = ultimo;
    } else {
      this.reiniciarConteo();
    }
  }

  reiniciarConteo = () => {
    this.ultimo = 0;
    this.grabarArchivo();
  };

  siguiente = () => {
    this.ultimo += 1;
    this.grabarArchivo();

    return `Ticket ${this.ultimo}`;
  };

  grabarArchivo = () => {
    let jsonData = {
      ultimo: this.ultimo,
      hoy: this.hoy
    };

    let jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync("./server/data/data.json", jsonDataString);
  };
}

module.exports = TicketControl;
