const net = require('net')
const port = 3002
const server = net.createServer(connection => {
    console.log('创建服务')
})
server.on('connection', function(sock) {
    console.log('有新连接创建')
    sock.on('data', data => {
        console.log('assets', data.toString())
        sock.write('aaa test')
    })
})

console.log('port %s', port)

server.listen(port)
