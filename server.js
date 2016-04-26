var express  = require('express');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser')

var app  = express();
// app.use(bodyParser());
// app.use(cookieParser());


var zipInfo;
var data;
var zipcode;

app.use(express.static("./public")); // sets standard files things. i.e /public/imgs will be /imgs
app.set('view engine', 'ejs'); // set up ejs for templating

require('./routes/routes.js')(app);//(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
