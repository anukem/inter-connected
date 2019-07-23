var http = require("http")

http.createServer(function (request, response)
{
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("this is my response to you")
}).listen(process.env["APP_PORT"])

console.log('Server is running')
