let catalog = [
    {
        name: '变量和作用域',
        page: 'variable_actionScope'
    },
    {
        name: '*引用类型',
        page: 'referenceType'
    },
    {
        name: '对象',
        page: 'Object'
    },
    {
        name: '数组',
        page: 'Array'
    },
    {
        name: '函数表达式',
        page: 'Function'
    },
    {
        name: '**canvas',
        page: 'Canvas'
    },
    {
        name: '****Web Workers',
        page: 'webWorker'
    },
    {
        name: '****File API',
        page: 'File_API'
    },
    {
        name: '**Geolocation API',
        page: 'Geolocation'
    },
    {
        name: '*****Web Sockets',
        page: 'Web_Sockets'
    },
    {
        name: '*事件',
        page: 'event'
    },
    {
        name: 'HTML5 脚本编程',
        page: 'HTML5'
    },
    {
        name: '*Ajax 与 Comet',
        page: 'Ajax_Comet'
    },
    {
        name: '**高级技巧',
        page: 'AdvancedTechniques'
    },
    {
        name: '***离线应用与客户端存储',
        page: 'application_cache__storge'
    }
]

module.exports = catalog.map((item, index) => {
    item.id = index + 1
    return item
})
