const router = require('express').Router()
const connection = require('../db/connect')
const { fn_query, clear_rows } = require('../db/utils')

const fn_sql = (type, param) => {
    let str = ''
    switch (type) {
        case 'tables':
            str = `select ${param.join(
                ', '
            )} from information_schema.tables  where table_schema='test1';`
            break
        case 'columns':
            str = `show full columns from ${param};`
            break
        default:
            break
    }
    return str
}

const sql1 = fn_sql('tables', ['table_name', 'table_comment'])

router.get('/', async function(req, res, next) {
    const rows = await fn_query(connection, sql1).then(res => {
        return res.rows
    })
    res.send({
        state: true,
        data: rows
    })
})

// 查询表中所有的字段
router.get('/columns', async function(req, res, next) {
    const {query} = req
    console.log('query', req, query, req.querys)

    const sql = fn_sql('columns', query.name)
    const rows = await fn_query(connection, sql).then(res => {
        const temps = res.rows
        let keys = []
        if(temps.length > 0) {
            keys = Object.keys(temps[0])
        }
        const results = temps.map(item => {
            const temp = {}
            keys.forEach(key => {
                temp[key.toLowerCase()] = item[key]
            })
            return temp
        })
        return results
    }, err => {
        console.log(err, '错了')
        return []
    })
    res.send({
        state: true,
        data: rows
    })
})

// show full columns from tab2;
module.exports = router
