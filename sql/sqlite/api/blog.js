var router = require('express').Router()
const db = require('../db_connect')

router.get('/', function(req, res, next) {
  db.run('SELECT * FROM blog_list', (err, users) => {
    console.log(user)
  })
})

module.exports = router
