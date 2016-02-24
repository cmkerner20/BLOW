var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('cs.db');
var express  = require('express');
var bodyParser   = require('body-parser');

var app  = express();
var zipInfo;

app.use(express.static("./public")); // sets standard files things. i.e /public/imgs will be /imgs

app.get('https://congress.api.sunlightfoundation.com/legislators/locate?zip='+ zip + '?apikey=[25d5c2f6794144a89172fb92c6ad847e]', function(data, status){
            zipInfo = data;
            
        });

  console.log(d);

db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3

db.all('SELECT * FROM users', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********U TABLE**********');
    console.log(rows); 
  }
});
db.all('SELECT * FROM bills', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********B TABLE**********');
    console.log(rows); 
  }
});
// db.run("DELETE FROM garages WHERE id=?", 1, function(err){
//   if(err){
//     throw err
//   }
// });
db.all('SELECT * FROM legislators', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********L TABLE**********');
    console.log(rows); 
  }
});
db.all('SELECT * FROM userBills', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********UB TABLE**********');
    console.log(rows); 
  }
});

db.all('SELECT * FROM userLegislators', function(err, rows){
  if(err){
    console.log(err);
  } else {
    console.log('********UL TABLE**********');
    console.log(rows); 
  }
});

  

require('./routes/routes.js')(app);//(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
