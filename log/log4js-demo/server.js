const express = require('express');

const app = express();
const port =  process.env.PORT || 3000;
// static
app.use('/static', express.static('static'));
// api
app.use('/api', require('./api'));
// log
// app.use('/log', require('./log'));
// router
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(require('./router'));

const server = app.listen(port, function() {
    console.log('Listening >>  http://localhost:'+ port + '/' + '\n');
})
