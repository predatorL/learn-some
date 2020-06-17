var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        scripts: [
            { id: 'user', script: 'user' },
            { id: 'blog', script: 'blog' }
        ]
    })
})

module.exports = router
