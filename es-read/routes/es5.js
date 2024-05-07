var express = require('express');
var router = express.Router();
var pages = require('./config/es5.js')

router.get('/', function (req, res, next) {
  res.render('es5/index', {
    pages,
    title: 'es6-read'
  })
})
router.get('/:page', function (req, res, next) {
  const {
    page = 'index'
  } = req.params
  res.render(`es5/demo/${page}`, {
    title: `es5-${page}`
  })
})


module.exports = router
