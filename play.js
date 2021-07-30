const net = require("net");
const connect = require('./client');

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     console.log("you ded cuz you idled");
//   })
  
//   return conn;
// };
connect();
console.log("Connecting ...");

