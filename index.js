const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  var a = 1;
  var b = 2;
  var c = a + b;

  return res.send('Hello World 3')
})

app.listen(3000, () => console.log(`App listening at localhost:${port}`))