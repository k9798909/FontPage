var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const serveIndex = require('serve-index');
const upload = require(__dirname + '/modules/image-uploads')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/avatar', upload.single('avatar'), (req, res)=>{
  res.json({
    file: req.file,
    body: req.body
  });
});

app.post('/photo', upload.array('photo', 5), (req, res)=>{
  res.json({
    files: req.files,
  });
});

app.get('/pending', (req, res)=>{
});

app.get('/test', function(req, res){
  res.json({
    name: 'David',
    age: 25,
    query: req.query
  });
});

app.get('/test2', function(req, res){
  res.send(JSON.stringify({
    name: 'David',
    age: 25,
    query: req.query
  }));
});

app.post('/try-post', function(req, res){
  res.json({
    name: 'try-post',
    age: 25,
    body: req.body
  });
});

app.use('/', serveIndex('public', {'icons': true})); // 加入此行

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
