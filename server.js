var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var config = require('./config');

app.use(morgan('dev'));

// use body parser to grab information from POST
// app.use(bodyParser.urlencoded({ extended:true}));
// app.use(bodyParser.json());

// configure app to handle CORS requests
app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Orgin','*');
	res.setHeader('Access-Control-Allow-Method','GET,POST');
	res.setHeader('Access-Control-Allow-Headers','X-Request-With,content-type,\Authorization');
	next();
});

// set static files location
app.use(express.static(__dirname + '/public'));

// // api routes
// var apiRoutes = require(__dirname + '/server/routes/api')(app,express);
// app.use('/api', apiRoutes); //all /api routes

// main route, calls index.html
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// set port
app.set('port', (process.env.PORT || 3000));

// start server!
app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));

});
