const connection = require('../db/connect')
const config = require('../db/table-config')
const utils = require('../db/utils')

connection.connect()

const sqlArr = Object.entries(config).map(item => {
    return utils.generator_table_sql(...item)
})

for (const sql of sqlArr) {
    utils.fn_query(connection, sql + ';').then(
        (results, fields) => {
            console.log('The rows ok!!!')
        },
        err => {
            console.log(err)
        }
    )
}
const queryList = sqlArr.map(item => {
    return utils.fn_query(connection, item + ';').then(
        (results, fields) => {
            console.log('The rows ok!!!')
            return [true]
        },
        err => {
            return [false, err]
        }
    )
})
Promise.all(queryList).then(resList => {
    console.log('resList'.resList)
    connection.end()
})
