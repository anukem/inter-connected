var http = require("http")

http.createServer(function (request, response)
{
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("this is my response to you")
}).listen(80)

console.log('Server is running')
