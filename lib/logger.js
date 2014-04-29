/*
Copyright (c) MyTeksi GrabTaxi 2013
Author: Fadrizul Hasani <fadrizul@gmail.com>
*/

var winston = require('winston');

// Declare the transport protocol for the logger
var logTransports = [
  new winston.transports.Console({
      colorize: true
    , timestamp: true
    , label: 'PID:' + process.pid
  })
];

module.exports = new winston.Logger({
    transports: logTransports
  , levels: {
      info: 0
    , verbose: 1
    , debug: 2
    , data: 3
    , warn: 4
    , error: 5
  }
  , colors: {
      info: 'green'
    , verbose: 'cyan'
    , warn: 'yellow'
    , debug: 'grey'
    , error: 'red'
  }
});
