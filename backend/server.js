// basic requirements
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
// allow cors in development
var cors = require('cors');
// routes for rest
var tasks = require('./routes/tasks');

// basics
var port = 3000;
var app = express();

// allow cors in development
app.use(cors({credentials: true, origin: true}));

// rendering engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// support parsing of json and x-www-form-urlencoded post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// redirect on file request and use angular routing
app.use(express.static(path.join(__dirname + '/dist/sharing-stuff-website')));
app.use('/api', tasks);
app.get('*', (req, res) => res.sendFile(path.join(__dirname)));
app.get('*', function(req, res) {
    res.sendfile('./dist/sharing-stuff-website/index.html')
});

// start sever
const server = http.createServer(app);
server.listen(port, function(){
    console.log('Server running on port: ' + port)
});

