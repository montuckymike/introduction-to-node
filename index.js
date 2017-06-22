// index.js
var http = require("http");

http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!");
}).listen(3000,function(){
  console.log("App is listening on port 3000")
});
