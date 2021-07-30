const net = require("net");
const connect = require('./client');
const setupInput = require('./input');

connect();
console.log("Connecting ...");

setupInput()