const fs = require('fs')
const path = require('path')
const basePath = process.cwd() + '/'
const loadFile = filePath => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) reject(err)
            resolve(data.toString())
        })
    })
}
const loadTpl = name => {
    const temp = basePath + name + '/module.tpl'
    return loadFile(temp)
}
const getModulePath = name => {
    return basePath + name + '/module.js'
}
const mountPage = async (name, options) => {
    const {el = '#page'} = options
    const template = await loadTpl(name)
    const params = Object.assign({el, template}, options)
    new Vue(params)
}

module.exports = {
    basePath,
    getModulePath,
    loadFile,
    loadTpl,
    mountPage
}
