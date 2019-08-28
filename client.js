const net = require('net');
const { host, port } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host,
    port
  });
  conn.setEncoding('utf8'); 

  conn.on('data', (msg) => {
    console.log(msg);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: TMD');
  });
  return conn;
}

module.exports = { connect };