const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const db = require('./middleware/database');


const app = express();
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname+'/../client/', 'build')));

app.use(require('./routes/blogs'));

if(process.env.NODE_ENV === 'production' || true){
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});
}


var debug = require('debug')('myblog:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = app;