const fs = require("fs");

class TicketControl {
  constructor() {
    this.ultimo = 0;
    this.hoy = new Date().getDate();

    let data = require("../data/data.json");
    const { ultimo, hoy } = data;

    if (hoy === this.hoy) {
    } else {
    }
  }

  reiniciarConteo = () => {
    let jsonData = {
      ultimo: this.ultimo,
      hoy: this.hoy
    };

    let jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync("../data/data.json", jsonDataString);
  };
}

module.exports = TicketControl;
