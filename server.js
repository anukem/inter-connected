var http = require("http")

http.createServer(function (request, response)
{
  if (request.method == "POST")
  {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
    })
    request.on('end', function() {
      console.log('Body: ' + body)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('post received')
    })

    response.end("this is done");
  }
}).listen(process.env.PORT || 3000)

console.log('Server is running')
