const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const db = require('./configs/db');
const app = express();
const port = 3000;

const route = require('./routes');

// Connect db
db.connect();

// Access file from public
app.use(express.static(path.join(__dirname, 'public')));

// Express override method
app.use(methodOverride('_method'));

// Htt[ Logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes init
route(app);

app.listen(port, () => console.log(`App listening at localhost:${port}`));
