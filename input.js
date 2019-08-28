const { moveUp, moveDown, moveLeft, moveRight } = require('./constants')
let connection;

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === moveUp) {
    connection.write("Move: up");
  } else if (key === moveDown) {
    connection.write("Move: down");
  } else if (key === moveLeft) {
    connection.write("Move: left");
  } else if (key === moveRight) {
    connection.write("Move: right");
  } else if (key === "\u0071") {
    connection.write("Say: get away from me");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  return stdin;
};

module.exports = { setupInput };