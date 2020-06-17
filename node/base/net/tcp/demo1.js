const net = require('net')
const severHandler = (socket) => {
    socket.on('data', (data) => {
        console.log('data', data.toString())
        socket.write('你好\n')
    })
    socket.on('end', (data) => {
        console.log('连接断开', data)
    })
    // console.log('socket', socket)
    socket.write('欢迎链接！\n')
}
const server = net.createServer(severHandler)

server.listen(8124, () => {
    console.log('server bound')
})

// 或者

// const server = net.createServer()
// server.on('connecttion', (data) => {
//     console.log('新的连接产生', data)
// })
// server.listen(8124)
