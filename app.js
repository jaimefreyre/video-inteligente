var express = require('express')
  var bodyParser = require('body-parser')
  var methodOverride = require('method-override')
  var routes = require('./rutas')
  var http = require('http')
  var path = require('path')
  var streamingService = require('./servicios/streaming');


var server;
var clients = [];

var app = express();

  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  // app.set('view engine', 'jade');
  // app.use(express.favicon());
  // app.use(express.logger('dev'));
  app.use(bodyParser());
  app.use(methodOverride());
  // app.use(app.router);
 app.use(express.static(path.join(__dirname, 'publicos')));

//  app.configure('development', function(){
//    app.use(express.errorHandler());
// });

app.get('/', routes.index);
app.get('/emisor', routes.emisor);
app.get('/display', routes.display);

 server = http.createServer(app).listen(app.get('port'), function(){
   console.log("Express server listening on port " + app.get('port'));
 });


 streamingService.start(server);