const router = require('express').Router()
const db = require('../db_connect')

router.get('/', function(req, res, next) {
    var result = db.get('SELECT * FROM user_list', (err, users) => {
        if(err) {
            console.log('error', err)
        }
        console.log('users', users)
        res.json({
            data: users ? users : []
        })
    })
})
router.post('/', function(req, res, next) {
    const {params} = req.body
    const tempData = {
        keys: [],
        vals: []
    }
    Object.entries(params).forEach(([key, val]) => {
        tempData.keys.push(key)
        tempData.vals.push(val)
    })
    const sqlStr = `insert into user_list (${tempData.keys.join(', ')}) values (${JSON.stringify(tempData.vals).slice(1, -1)});`
    var result = db.get(sqlStr, (err, users) => {
        if(err) {
            console.log('error', err)
        }
        console.log('users', users)
        res.json({
            data: users ? users : []
        })
    })
})
module.exports = router
