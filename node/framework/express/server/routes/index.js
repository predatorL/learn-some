require('../db/connect');
const router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'index', posts: [] });
});


router.get('/topic/create', function(req, res, next) {
    res.render('topic/create', { title: 'topic' });
});


router.get('/about', function(req, res, next) {
    res.render('about', { title: 'about' });
});


module.exports = router;
