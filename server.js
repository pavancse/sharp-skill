var express = require('express');
var app = express();

var bodyParser = require('body-parser');

//for authentication
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'iamlegend',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//require ("./test/app.js")(app);

// require("./todo/app")(app);

require("./server/app")(app);
var port = process.env.PORT || 3000;

app.listen(port);