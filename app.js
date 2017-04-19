var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var request = require("request")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:"false"}));


app.use(function(req, res, next){
    res.locals.errors = null;
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Set static path
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.render('index', {data:'student'});
});

app.get('/student', function(req, res){
    res.render('index', {data:'student'});
});


app.get('/journal', function(req, res){
    res.render('index',{data:'journal'});
});

app.get('/activity', function(req, res){
    res.render('index', {data:'activity'});
});

app.get('/activitylist', function(req, res){
    res.render('index', {data:'activitylist'});
});

app.get('/map', function(req, res){
    res.render('index', {data:'map'});
});


app.listen(3000, function(){
    console.log('Server Started at port: 3000');
})