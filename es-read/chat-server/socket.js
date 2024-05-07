'use strict';
const socketIo = require('socket.io')

class InitSocket {
    constructor() {
        this.guestNumber = 0;
        this.roomName = 'test1';
        // 用于用户的ip，防止多窗口登录
        this.ipPool = new Set();
        this.ipMap = new Map();
        this.io = null
        this.nickNames = {}
        this.namesUsed = [];
        this.currentRoom = {}
    }
    /**
     * @fn 获取房间信息
     */
    getRoomInfo() {
        return {
            count: this.ipPool.size,
        }
    }
    /**
     * @fn 获取用户信息
     */
    getUserInfo(socket) {
        const {address} = socket.handshake;
        return this.ipMap.get(address);
    }
    /**
     * @fn 新用户加入房间
     */
    joinRoom(socket, address) {
        this.ipPool.add(address);
        let name = address.substr(7);
        // ip对应名字
        this.ipMap.set(address, {
            name
        });
        // 加入房间
        socket.join(this.roomName);
        // 通知其他用户有人加入
        socket.broadcast.to(this.roomName).emit('message', {
            type: 'broadcast',
            text: `用户: ${name} 加入房间`
        });
        // 通知其他用户房间信息变更
        socket.broadcast.to(this.roomName).emit('room-info', {
            type: 'common',
            data: Object.assign({}, this.getRoomInfo())
        });
        // 返回登录信息
        socket.emit('system', {
            message: '您已经登录',
            status: 200,
            type: 'login',
            data: {
                name,
                room: Object.assign({}, this.getRoomInfo())
            }
        });
    }

    /**
     * @fn 用户断开连接
     * @param {*} address
     * @param {*} reason
     */
    userDisconnect(address, reason) {
        // console.log('userDisconnect', address, reason);
        let person = this.ipMap.get(address);
        this.ipPool.delete(address);
        this.ipMap.delete(address);
        // 通知其他用户有人加入
        this.io.to(this.roomName).emit('message', {
            type: 'broadcast',
            text: `用户: ${person.name} 离开房间`
        });
        // 通知其他用户房间信息变更
        this.io.to(this.roomName).emit('room-info', {
            type: 'common',
            data: Object.assign({}, this.getRoomInfo())
        });
    }
    /**
     * @fn 用户链接处理
     * @param {*} socket
     */
    handleConnection (socket) {
        let {address} = socket.handshake;
        let hasContect = this.ipPool.has(address);
        // console.log(this.ipPool, address, hasContect)
        // 检测是否登录
        if(hasContect) {
            socket.emit('system', {
                message: '您已经登录, 暂不支持多点访问',
                status: 5001,
                type: 'login',
            });
            setTimeout(() => {
                socket.disconnect(true);
            }, 10000);
        } else {
            this.joinRoom(socket, address);
            // 用户失联处理
            socket.on('disconnect',  this.userDisconnect.bind(this, address));
            // 发信息处理
            socket.on('message', this.handleMsg.bind(this, socket));
        }

    }

    handleMsg(socket,  msg) {
        console.log('handleMsg', 'socket', msg);
        const person = this.getUserInfo(socket);
        if(msg.trim() === '') {
            return;
        }
        socket.broadcast.to(this.roomName).emit('message', {
            type: 'common',
            data: {
                name: person.name,
                text: msg
            }
        });
    }

    listen(server) {
        this.io = socketIo(server)
        this.io.on('connection', this.handleConnection.bind(this));
    }
}

module.exports = function() {
    return new InitSocket()
}

