//first node page to load in a browser

//reference the http library that ships with node
var http = require('http');

//start and http server asynchronously
http.createServer(function(request, response) {
  //send a response
  response.writeHead(200);
  response.write('<h1>Our first node page</h1>');
  response.end();
}).listen(300);

//display a message to the console
console.log('Server running on port 3000');
