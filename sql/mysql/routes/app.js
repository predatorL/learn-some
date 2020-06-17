const router = require('express').Router();
const config = require('./app-config')
/* GET users listing. */
router.get('/:view', function(req, res, next) {
  res.render('app', {
    scripts: config[req.params.view]
  });
});

module.exports = router;
