const express = require('express')
const bodyParser = require('body-parser')

// Create a new instance of express
const app = express()

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

// Route that receives a POST request to root
app.post('/', function (req, res) {
  const body = req.body.Body
  console.log(req)
  res.set('Content-Type', 'text/plain')
  res.send(`Why you saying${body}`)
})

// Tell our app to listen on port 3000
app.listen(process.env.PORT || 3000, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 3000')
})
console.log('Server is running')
