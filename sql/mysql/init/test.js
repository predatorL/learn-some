const connection = require('../db/connect')
const utils = require('../db/utils')

connection.connect()

const sqlStr = 'show full columns from tab2;'

utils.fn_query(connection, sqlStr).then(
    (results, fields) => {
       console.log(results.rows)
    },
    err => {
        console.log('err', err)
    }
).then(_ => {
    connection.end()
})
