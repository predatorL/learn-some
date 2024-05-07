const app = require('express')();
const server = require('http').Server(app);
const socket = require('./socket')();
const ejs = require('ejs');

socket.listen(server);

server.listen(3042, function() {
    console.log('socket listening on *:3042');
});


app.engine('html', ejs.__express);

app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(3043, function() {
    console.log('web listening on *:3043');
})
