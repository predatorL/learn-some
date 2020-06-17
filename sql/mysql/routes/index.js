var router = require('express').Router();
const config = require('./app-config');

router.get('/', function(req, res, next) {
    const navs = Object.entries(config).map(item => item[1][0]);
    res.render('index', {
        navs
    });
});

module.exports = router;
