const fn_query = (connection, sqlStr) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlStr, (error, rows, fields) => {
            if (error) {
                reject({ error, fields })
            } else {
                resolve({ rows, fields })
            }
        })
    })
}


const generator_table_sql = (name, info) => {
    const {fields, comment} = info
    const columns = fields.map(item => [item.name, item.type].join(' ')).join(', ')
    return `create table ${name}(${columns}) comment="${comment}"`
}

/*
一般的语句输出都是这玩意
[
    RowDataPacket { Tables_in_test1: 'tab1' },
    RowDataPacket { Tables_in_test1: 'tab2' },
    RowDataPacket { Tables_in_test1: 'tab3' }
]

*/

const clear_rows = rows => {
    let key = ''
    // 取第一个数组的key
    if (rows.length > 0) {
        key = Object.keys(rows[0])[0]
    }
    // 取值
    return rows.map(item => item[key])
}

module.exports = {
    fn_query,
    generator_table_sql,
    clear_rows
}
