var express = require('express');
var router = express.Router();

router.route('/')
.get(function(req, res, next) {
    res.render('index', {
        title: 'CSS Buttons'
    });
});

router.route('/submit')
.get(function(req, res, next) {
    res.render('submit', {
        title: 'Submit Button'
    });
});

router.route('/right')
.get(function(req, res, next) {
    res.render('right', {
        title: 'Right Button'
    });
});

router.route('/fault')
.get(function(req, res, next) {
    res.render('fault', {
        title: 'Fault Button'
    });
});

module.exports = router;
