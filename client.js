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

    // for (let i = 0; i < 4; i++) {
      
    //   setTimeout(() => {
    //     conn.write("Move: up")
    //   }, 500 * i);
      
    // }
  })

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  })
  
  return conn;
};

module.exports = connect;
