const net = require('net')
const conf = {
    host:'127.0.0.1',
    port:3002
}
const client = new net.Socket()

client.connect(conf.port, conf.host, () => {
    console.log(`CONNECTED TO: ${conf.host}:${conf.port}`)
    client.write(`This is Spanda!!!`)
})

module.exports = client
