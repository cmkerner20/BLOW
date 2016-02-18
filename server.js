var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('garage_demo.db');
var express  = require('express');
var bodyParser   = require('body-parser');

var app  = express();

app.use(express.static("./public")); // sets standard files things. i.e /public/imgs will be /imgs


db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3

db.all('SELECT * FROM garages', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********GARAGES TABLE**********');
    console.log(rows); 
  }
});
db.all('SELECT * FROM cars', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********CARS TABLE**********');
    console.log(rows); 
  }
});
db.run("DELETE FROM garages WHERE id=?", 1, function(err){
  if(err){
    throw err
  }
});
db.all('SELECT * FROM garages', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********GARAGES TABLE**********');
    console.log(rows); 
  }
});
db.all('SELECT * FROM cars', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********CARS TABLE**********');
    console.log(rows); 
  }
});

require('./routes/routes.js')(app);//(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
