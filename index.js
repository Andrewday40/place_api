var express = require('express');
var server = express();

var port = process.env.PORT || 8080;

server.get('/', function(response, request){
  response.sendFile('/')
});

server.listen(port, function(){
  CONSOLE.LOG('Now listening on port:', port)
});
