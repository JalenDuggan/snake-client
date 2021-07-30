const net = require("net");
const connect = require('./client');

connect();
console.log("Connecting ...");

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = (input) => {
    if (input === 'w') {
      stdin.write("Move: up")
      
    }
    if (input === 'a') {
      stdin.write("Move: left")
      
    }
    if (input === 's') {
      stdin.write("Move: down")
      
    }
    if (input === 'd') {
      
      stdin.write("Move: right")
    }
    if (input === '\u0003') {
      process.exit();
    }
  }
  stdin.on("data", handleUserInput);
  return stdin;
};


setupInput()