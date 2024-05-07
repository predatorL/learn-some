const socketIo = require('socket.io')

class InitSocket {
    constructor() {
        this.guestNumber = 1
        this.io = null
        this.nickNames = {}
        this.namesUsed = []
        this.currentRoom = {}
    }

    assignGuestName(socket) {
        const name = 'Guest' + this.guestNumber
        console.log('assignGuestName:'.green, name.blue)
        this.nickNames[socket.id] = name
        socket.emit('nameResult', {
            success: true,
            name
        })
        this.namesUsed.push(name)
        this.guestNumber += 1
    }

    joinRoom(socket, room) {
        const { nickNames, io } = this
        socket.join(room)
        this.currentRoom[socket.id] = room
        // 返回结果
        socket.emit('joinResult', { room })
        // 向所有人广播有人加入
        socket.broadcast.to(room).emit('message', {
            text: [nickNames[socket.id], ' has joined ', room, ' .'].join('')
        })
        return
        const usersInRoom = io.sockets(room)
        console.log('usersInRoom', usersInRoom.length)
        if (usersInRoom.length < 1) {
            return
        }
        let tempMsg = `Users cuurently in ${room}: `
        const otherUsers = usersInRoom.filter(item => {
            return usersInRoom[index].id !== socket.id
        })
        // for (let index in usersInRoom) {
        //     const userSocketId = usersInRoom[index].id
        //     if (userSocketId != socket.id) {
        //         if (index > 0) {
        //             tempMsg += ', '
        //         }
        //         tempMsg += nickNames[userSocketId]
        //     }
        // }
        // tempMsg += '.'
        // socket.emit('message', { text: tempMsg })
    }

    handleConnection(socket) {
        const { io, guestNumber } = this
        this.assignGuestName(socket)
        this.joinRoom(socket, 'Lobby')
        // handleMessageBroadcasting(socket, nickNames)
        // handleNameChangeAttempts(socket, nickNames, namesUsed)
        // handleRoomJoining(socket)
        // socket.on('rooms', () => {
        //     socket.emit('rooms', io.sockets.manageer.rooms)
        // })
    }

    listen(server) {
        this.io = socketIo(server)
        this.io.on('connection', socket => {
            this.handleConnection(socket)
        })
    }
}

module.exports = function() {
    return new InitSocket()
}

// let io = null
// let guestNumber = 1
// const nickNames = {}
// const namesUsed = []
// const currentRoom = {}

// const joinRoom = (socket, room) => {
//     socket.join(room)
//     currentRoom[socket.id] = room
//     socket.emit('joinResult', {room})
//     socket.broadcast.to(room).emit('message', {
//         text: [nickNames[socket.id],' has joined ', room, ' .'].join('')
//     })
//     const usersInRoom = io.sockets.cilents(room)
//     if(usersInRoom.length > 1) {
//         let usersInRoomSummary = ['Users cuurently in', room, ':']
//         for(let index in usersInRoom) {
//             const userSocketId = usersInRoom[index].id
//             if(userSocketId != socket.id) {
//                 if(index > 0) {
//                     usersInRoomSummary.push(', ')
//                 }
//                 usersInRoomSummary.push(nickNames[userSocketId])
//             }
//         }
//         usersInRoomSummary.push('.')
//         socket.emit('message', {text: usersInRoomSummary.join('')})
//     }
// }

// const handleNameChangeAttempts = (socket, nickNames, namesUsed) => {
//     socket.on('nameAttempt', (name) => {
//         if(name.indexOf('Guest') === 0) {
//             socket.emit('nameResult', {
//                 success: false,
//                 message: '名称不能以Guest开头'
//             })
//             return
//         }
//         if(namesUsed.indexOf(name) === -1) {
//             const previousName = nickNames[socket.id]
//             const previousNameIndex = namesUsed.indexOf(previousName)
//             namesUsed.push(name)
//             nickNames[socket.id] = name
//             delete namesUsed[previousNameIndex]
//             socket.emit('nameResult', {
//                 success: true,
//                 name
//             })
//             socket.broadcast.to(currentRoom[socket.id]).eimt('message', {
//                 text: previousName + ' is now known as ' + name + '.'
//             })
//             return
//         }
//         socket.emit('nameResult', {
//             success: false,
//             message: 'That name is already in use.'
//         })
//     })
// }

// const handleMessageBroadcasting = (socket) => {
//     socket.on('message', (message) => {
//         socket.broadcast.to(message.room).emit('message', {
//             text: nickNames[socket.id] + ': ' + message.text
//         })
//     })
// }

// const handleRoomJoining = (socket) => {
//     socket.on('join', (room) => {
//         socket.leave(currentRoom[socket.id])
//         joinRoom(socket, room.newRoom)
//     })
// }

// const handleCilentDisconnection = (socket) => {
//     socket.on('disconnect', () => {
//         const nameIndex = namesUsed.indexOf(nickNames[socket.id])
//         delete namesUsed[nameIndex]
//         delete nickNames[socket.id]
//     })
// }

// module.exports = listen
