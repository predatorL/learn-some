var mysql = require('mysql')
var config = require('../config/db')

var connection = mysql.createConnection(config)

module.exports = connection


// connection.query('sekec', function(error, results, fields) {
//     if (error) throw error
//     console.log('The solution is: ', results[0].solution)
// })

// connection.end()
