// import libraries
const express = require('express');
const app = express()
const path = require('path')

// Requires this line to use external CSS
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')))
// Render index.html
app.get('/', function(req, res){
  console.log('GET Request');
  res.sendFile(__dirname + 'public/index.html')
})

const server = app.listen(5000, function() {
  const host = server.address().address
  const port = server.address().port

  console.log("Website listening at http://%s:%s", host, port)
})

console.log(__dirname)
