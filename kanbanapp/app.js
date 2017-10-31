/import React from 'react';
import React, {Component} from 'react';
import KanbanBoard from './public/javascripts/kanban/KanbanBoard';

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the **whole** book",
        color: '#BD8D31',
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book. The complete source can be found at [github](http://github.com/pro-react)",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            },
        ]
    }
];

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));









/*var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();*/




//// http.createServer(function (req, res) {
////   res.writeHead(200, {'Content-Type': 'text/plain'});
////   res.end('Hello World\n');
//// }).listen(1337, '127.0.0.1');
////
//// console.log('Server running at http://127.0.0.1:1337/')
//
//http.createServer(function (req, res) {
//  if (req.url === '/favicon.ico') {
//    return res.end();
//  }
//  console.log('Incoming request to ' + req.url);
//
//  var i = 2;
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//
//  setTimeout(function() {
//    fs.readFile(__filename, {
//      encoding: 'utf8'
//    }, function (error, contents) {
//      if (error) {
//        console.error(error);
//        return res.end();
//      }
//
//      console.log('Sending response for ' + req.url);
//      console.log("------------------");
//      console.log(mmm.add(3, 5));
//      console.log(mmm.multiply(3, 5));
//      console.log(mmm.factorial(4));
//      console.log("------------------");
//      res.end(contents);
//    });
//  }, 5000);
//
//  while(i--) {
//    console.log('Loop value: ' + i + '\r');
//  }
//}).listen(1337, '127.0.0.1');
//
//
//
//
//
//console.log('Server running at http://127.0.0.1:1337/');







// view engine setup

/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/*app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));*/

/*app.use('/', index);
app.use('/users', users);*/

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;*/

// git@github.com:zeichi/kanbanapp.git
// /Users/zeichi/IdeaProjects/kanbanapp

