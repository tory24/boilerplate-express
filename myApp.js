var bodyParser = require("body-parser");
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var response = 'Hello json';

//Console Log Hello World
console.log('Hello World');

//Root level request logger function
//NOTE: Express evaluates functions in the order they appear in the code. If we want it to work for all routes, it should be mounted before them.
app.use('/', function(req,res,next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

//Get request to post hello express when you visit the root domain
app.get('/', function(req, res) {
  //res.send('Hello Express');

  //Serve a HTML File
  res.sendFile(__dirname + '/views/index.html');
});

//Serve a JSON at url/json
app.get('/json', (req, res) => res.json(
        {"message": process.env.MESSAGE_STYLE === "uppercase" ? response.toUpperCase() : response})
);

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({'time':req.time});
});

app.use('/public', express.static(__dirname + '/public'));

//Route Parameter Input from the Client
app.get('/:word/echo', function(req,res) {
  res.send({'echo':req.params.word});
});

//Query Parameter Input from the Client
app.get('/name', function(req,res) {
  res.json({'name': `${req.query.first} ${req.query.last}`})
});


module.exports = app;