var express = require('express');
var router = express.Router();


var questionnaireSource = "https://docs.google.com/forms/d/1JaTPSo32obnxqFfHtnih5BC6HfDvP6hhTnkhiGcFFFw/viewform?embedded=true";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/questionnaire', {questionnaireSource: questionnaireSource});
});

module.exports = router;