var express = require('express');
var router = express.Router();
var queries = require('./queries')

router.get('/', function(request, response) {
    queries.getUsers(request, response)
})

// router.post('/', function(req, res) {
//     res.send('ini dari POST THINGS');
// })

module.exports = router;