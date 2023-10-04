var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('ini dari GET HUHUHUHUH');
})

app.post('/', function(req, res) {
    res.send('ini dari POST WAKAKKAKA');
})

app.listen(3000)