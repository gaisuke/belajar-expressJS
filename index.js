var express = require('express');
var app = express();

var things = require('./things.js');
var users = require('./users.js');

app.get('/', function(req, res) {
    res.send('ini dari GET HUHUHUHUH');
})

app.post('/', function(req, res) {
    res.send('ini dari POST WAKAKKAKA');
})

app.use('/things', things);
app.use('/users', users);

app.listen(3000)