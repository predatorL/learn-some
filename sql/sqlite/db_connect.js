const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(__dirname + '/db/test1.db', err => {
    console.log('start', err)
})
module.exports = db
