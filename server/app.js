var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require ('cors')
//var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require('dotenv').config()

var app = express();


app.use(cors({
                origin: process.env.FRONTEND_URL,
                credentials: true
            })
        );





app.use(cookieParser());
// app.use(bodyParser());

app.use(logger('dev'));
app.use(express.json({extended: false}));
app.use(express.urlencoded({ extended: false }));



app.use('/', indexRouter);
app.use('/', usersRouter);


app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;
