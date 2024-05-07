var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'es-read'
  });
})
router.use('/pages/es6', require('./es6'));
router.use('/pages/es5', require('./es5'));

module.exports = router
