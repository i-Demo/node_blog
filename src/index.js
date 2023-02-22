const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// Htt[ Logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname : ".hbs",
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  return res.render('home')
})

app.listen(3000, () => console.log(`App listening at localhost:${port}`))