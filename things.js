var express = require('express');
var router = express.Router();

router.get('/:name/:id', function(req, res) {
    res.send('id ' + req.params.id + ' dan name ' + req.params.name);
})

router.post('/', function(req, res) {
    res.send('ini dari POST THINGS');
})

module.exports = router;