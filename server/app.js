var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require('dotenv').config()

var app = express();

app.use(cors({
                origin: process.env.FRONTEND_URL,
                credentials: true
            })
        );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/', usersRouter);


app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;
