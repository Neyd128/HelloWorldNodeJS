var http = require('http');

console.log("Startuje serwer...");

http.createServer(function(request, response){
    //tu jest fukncja createServer
    response.writeHead(418, {'Content-Type': 'text/html'});
    response.write("JestemImbryczkiem");
    response.end();
}).listen(8080);