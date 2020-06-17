var router = require('express').Router()
const db = require('../db_connect')

router.use('/user', require('./user'))
router.use('/blog', require('./blog'))

module.exports = router
