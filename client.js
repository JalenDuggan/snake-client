const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("We are connected");
    conn.write("Name: IDK")
  })

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  })
  
  return conn;
};

module.exports = connect;
