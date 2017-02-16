var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var routes = require('./routes/index');

// Init App
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// // BodyParser Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// app.use(function(req,res){
//     res.render('404');
// });

// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});