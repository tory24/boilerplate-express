var express = require('express');
var app = express();

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
  if(process.env.MESSAGE_STYLE === 'uppercase') {
    response = 'Hello world'.toUpperCase();
  } else {
    esponse = 'Hello world';
  }

});

app.use('/public', express.static(__dirname + '/public'));


module.exports = app;