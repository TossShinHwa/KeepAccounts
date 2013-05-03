var express = require('express')
  , routes = require('./routes')
  , data = require('./routes/data')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('jqtpl').__express);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/recent', routes.recent);
app.get('/yearstatistic', routes.yearstatistic);
app.get('/data/list', data.list);
app.get('/data/payment', data.payment);
app.get('/data/income', data.income);
app.get('/data/majorCategory', data.majorCategory);
app.get('/data/subCategory', data.subCategory);
app.get('/data/itemsCategory', data.itemsCategory);
app.post('/data/addItems', data.addItems);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

