var express = require('express');
var router = express.Router();

var email = 'hello@cosude.com';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/contact', {email: email});
});

module.exports = router;