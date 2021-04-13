var express = require('express');
var app = express();

var response = 'Hello json';

//Console Log Hello World
console.log('Hello World')

//Get request to post hello express when you visit the root domain
app.get('/', function(req, res) {
  //res.send('Hello Express');

  //Serve a HTML File
  res.sendFile(__dirname + '/views/index.html');
});

//Serve a JSON at url/json
app.get('/json', function(req, res) {
  return (process.env.MESSAGE_STYLE === 'uppercase') ?
    res.json({'message': response.toUpperCase()}):
    res.json({'message': response});
});


app.use('/public', express.static(__dirname + '/public'));


module.exports = app;