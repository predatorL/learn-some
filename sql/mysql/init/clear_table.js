const connection = require('../db/connect')
const utils = require('../db/utils')
const sql_base = require('../db/sql_base')

connection.connect()

// 查所有表　方法一
utils
    .fn_query(connection, sql_base.select_tables)
    .then(
        (results, fields) => {
            const rows = utils.clear_rows(results.rows)
            console.log('The result ok!!!', rows)
            return rows
        },
        err => {
            console.log(err)
            throw err
        }
    )
    .then(rows => {
        // 直接运行多条好像会挂掉，为啥
        // const sqlStr = rows.map(item => `drop table ${item}`).join('; ')
        const queryList = rows.map(item => utils.fn_query(connection, `drop table ${item};`))
        Promise.all(queryList).then(resList => {
            console.log('resList', resList)
        }, errList => {
            console.log('errList', errList)
        })
        .then(res => {
            connection.end()
        })
    })
// 查所有表　方法二
// utils.fn_query(connection, sql_base).then((results, fields) => {
//     console.log('The result ok!!!')
// }, err => {
//     console.log(err)
// })

// connection.end()
