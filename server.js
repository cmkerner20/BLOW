var express  = require('express');
var app = express();
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

var ejs = require('ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs"); 


// app.use(bodyParser());
// app.use(cookieParser());



var data;


app.use(express.static("./public")); // sets standard files things. i.e /public/imgs will be /imgs
app.set('view engine', 'ejs'); // set up ejs for templating

require('./routes/routes.js')(app);//(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
