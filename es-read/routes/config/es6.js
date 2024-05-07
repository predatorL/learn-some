let catalog = [
    {
        name: 'let 和 const 命令 + 变量的解构赋值(done)',
        page: 'let_destructuring'
    },
    {
        name: '字符串的扩展',
        page: 'string'
    },
    {
        name: '正则的扩展',
        page: 'regex'
    },
    {
        name: '数值的扩展',
        page: 'number'
    },
    {
        name: '函数的扩展',
        page: 'function'
    },
    {
        name: '数组的扩展',
        page: 'array'
    },
    {
        name: '对象的扩展',
        page: 'object'
    },
    {
        name: 'Symbol',
        page: 'symbol'
    },
    {
        name: 'Set 和 Map 数据结构',
        page: 'set-map'
    },
    {
        name: 'Proxy(doing) Reflect',
        page: 'Proxy_Reflect'
    },
    {
        name: 'Promise 对象',
        page: 'promise'
    },
    {
        name: 'Iterator 和 for...of 循环',
        page: 'iterator'
    },
    {
        name: 'Generator 函数的语法、异步应用',
        page: 'generator'
    },
    {
        name: 'async 函数',
        page: 'async'
    },
    {
        name: 'Class 的基本语法、继承',
        page: 'class'
    },
    {
        name: 'Decorator',
        page: 'decorator'
    },
    {
        name: 'Module 的语法',
        page: 'module'
    },
    {
        name: 'Module 的加载实现',
        page: 'module-loader'
    },
    {
        name: 'ArrayBuffer',
        page: 'arraybuffer'
    }
]

module.exports = catalog.map((item, index) => {
    item.id = index + 1
    return item
})
