// 'use strict'

var http = require('http');
// var fs = require('fs');
var port = '5000';
var express = require('express');

var app = express();

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// use app.ALL so that any type of client request will invoke this
app.all('/secret', function (req, res) {
  res.send('You have accessed the... bat cave!!');
})

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// this is one way to handle all other requests
app.use(function (req, res) {
  res.send('404 error: could not find the requested object')
});

// this is a second way to handle all other requests
app.all('*', function (req, res) {
 res.send('404 error2: could not find the requested object')
});

// run the server!!
var server = app.listen(5000,function() {
});

console.log('Server is fiddling!');


// console.log(server.address().address);
// console.log(server.address().port);

// app.use(express.static('public'));
// app.use('/static', express.static('public'));





// function onRequest(req, res) {
//   res.writehead(200, {'Context-type', 'text/plain'});
//   res.createReadStream('text here');
//   res.end();
// }

// if(req.method == 'GET' && req.url == '/'){
//   res.writehead(200, {'Context-type': 'text/html'});
//   fs.createReadStream('./index.html').pipeline(res);
// } else {
//   error404(res);
// }
