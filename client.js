const net = require("net");
const setupInput = require("./input");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are connected");
    conn.write("Name: IDK")


    // for (let i = 0; i < 4; i++) {
      
    //   setTimeout(() => {
    //     conn.write("Move: up")
    //   }, 500 * i);
      
    // }
  })

  setupInput(conn);

  conn.on("data", () => {
    
    console.log("you ded cuz you idled");
  })
  return conn;
};



module.exports = connect;
