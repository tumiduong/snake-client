const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.102',
    port: 50541
  });
  conn.setEncoding('utf8'); 

  conn.on('data', (msg) => {
    console.log(msg);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: TMD');
    //conn.write('Move: up');
  });

  return conn;
}

module.exports = { connect };