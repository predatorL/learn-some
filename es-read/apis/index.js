const router = require('express').Router()

router.use('/es5', require('./es5'))

router.use('/es6', require('./es6'))

module.exports = router
