// const db = require('./connect')
var sqlite3 = require('sqlite3')
var db = new sqlite3.Database(__dirname + '/test1.db')

db.serialize(function() {
    db.run(`CREATE TABLE user_list(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME           TEXT    NOT NULL,
    AGE            INT     NOT NULL,
    SEX            INT     NOT NULL,
    ROLE            INT     NOT NULL,
    ADDRESS        CHAR(50),
    SALARY         REAL);`)
    db.run(`drop TABLE user`)
})

db.close()
