require('dotenv').config();
const { connectDatabase } = require('./database/database');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var studentsRouter = require('./routes/students');

// connect to database
connectDatabase()
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.error('Error connecting to database', error);
  });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/students', studentsRouter);

module.exports = app;
