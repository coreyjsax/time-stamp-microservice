const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const server = require('http').createServer(app);
const timeStampRoutes = require('./routes/index');
const viewRoutes = require('./routes/view');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/api/timestamp', timeStampRoutes);
app.use('/', viewRoutes)

app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

module.exports = app;



app.start = app.listen = function(){
    return server.listen.apply(server, arguments)
}

app.start(process.env.PORT, () => {
    console.log('Timestamp server started')
});