const sqlite = require('sqlite3')
const db = new sqlite.Database('./db/tmp/1.db', (err) => {
    console.log('start', err)
    db.run('create table test(name varchar(15))', (err) => {
        console.log('create', err)
        db.run('insert into test values("hello, world")', (err) => {
            console.log('insert', err)
            db.all('select * from test', (err, res) => {
                if (!err) {
                    console.log(JSON.stringify(res))
                } else {
                    console.log(err)
                }
            })
        })
    })
})
