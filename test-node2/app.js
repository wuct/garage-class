
/**
 * Module dependencies.
 */

var express = require('express')
  , index = require('./routes/index')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Garage',
		name: 'Garage'
	});
});

app.get('/api/user', function (req, res) {
  var userList = [
    { name: 'Tom', _id: '123'},
    { name: 'Jim', _id: '124'},
    { name: 'Fred', _id: '125'},
    { name: 'Denny', _id: '126'},
    {name:'John', phone:'555-1276'},
    {name:'Mary', phone:'800-BIG-MARY'},
    {name:'Mike', phone:'555-4321'},
    {name:'Adam', phone:'555-5678'},
    {name:'Julie', phone:'555-8765'},
    {name:'Juliette', phone:'555-5678'}
  ];
  res.send(userList);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
