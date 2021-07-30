const net = require("net");

let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = (input) => {
    if (input === 'w') {
      connection.write("Move: up")
      
    }
    if (input === 'a') {
      connection.write("Move: left")
      
    }
    if (input === 's') {
      connection.write("Move: down")
      
    }
    if (input === 'd') {
      
      connection.write("Move: right")
    }
    if (input === 'e') {
      
      connection.write("Say: EZ")
    }
    if (input === '\u0003') {
      process.exit();
    }
  }
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
