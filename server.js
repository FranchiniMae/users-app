/*
* server.js
*/

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));


// parse form data ( application/x-www-form-urlencoded )
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());  // ADD THIS LINE
// set view engine to hbs (handlebars)
// app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');


app.get('/api/todos', function (req, res) {

});

app.post('/api/todos', function (req, res) {

});

app.get('/api/todos/:id', function (req, res) {

});

app.put('/api/todos/:id', function (req, res) {

});

app.delete('/api/todos/:id', function (req, res) {
 
});

/*
* Load `views/index.hbs` file
* when any route is requested from the server
*/
app.get('*', function (req, res) {
  res.render('index');
});

// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});