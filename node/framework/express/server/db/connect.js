const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
var db = mongoose.connection;
console.log('被引用了')

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function() {
    //一次打开记录
    console.log('open')
});
