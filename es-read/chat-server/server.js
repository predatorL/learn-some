const app = require('express')()
const server = require('http').Server(app)
const socket = require('./socket')()

socket.listen(server)

server.listen(3042, function() {
    console.log('listening on *:3042')
})
