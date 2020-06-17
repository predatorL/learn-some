const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let win = null

const createWindow = () => {
    // 创建浏览器窗口。
    win = new BrowserWindow({width: 800, height: 600})
    // 然后加载应用的 index.html。
    const index = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    })
    win.loadURL(index)

    // 打开开发者工具
    win.webContents.openDevTools()

    // 当window被关闭，触发事件
    win.on('closed', () => {
        // 取消引用window对象，如果你的应用支持多窗口的话，
        // 通常会把多个window对象放在一个数组里面
        // 与此同时，你应该删除相应的元素
        win = null
    })

}

// Electron会在初始化后病准备
// 创建浏览器窗口时，调用这个函数
// 部分API在ready事件出发后才能使用
app.on('ready', createWindow)

// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
    // 在macOS上，除非用户用Cmd+Q确定的退出，
    // 否则绝大部分应用及其菜单栏会保持激活
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口
    if(win === null) {
        createWindow()
    }
})

// 在这文件，你也可以续写应用剩下的主进程代码。
// 也可以拆分成几个文件，然后require导入
