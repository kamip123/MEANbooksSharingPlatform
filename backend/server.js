var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

//var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname + '/dist/sharing-stuff-website')));
app.use('/api', tasks);

app.get('*', (req, res) => res.sendFile(path.join(__dirname)))
app.get('*', function(req, res) {
    res.sendfile('./dist/sharing-stuff-website/index.html')
})





//app.use('/', index);
//app.use('/api', tasks);

const server = http.createServer(app);

server.listen(port, function(){
    console.log('Server running on port: ' + port)
});

//app.listen(port, function(){
//    console.log('Server running on port: ' + port)
//});
