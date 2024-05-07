var express = require('express');
var router = express.Router();
var pages = require('./config/es6.js')



router.get('/', function (req, res, next) {
  res.render('es6/index', {
    pages,
    title: 'es6-read'
  })
})
router.get('/:page', function (req, res, next) {
  const {
    page = 'index'
  } = req.params
  res.render(`es6/demo/${page}`, {
    title: `es6-${page}`
  })
})


module.exports = router
