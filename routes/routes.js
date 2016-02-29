module.exports = function(app) {
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('cs.db');

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs');
});

app.get('https://congress.api.sunlightfoundation.com/legislators/locate?zip=zip?apikey=7e9b73b47a324c499f9ac9c13bb9e624', function(data, status){
            console.log("called");
            zipInfo = data;
            console.log(data);
            
        });

app.get('/register', function(req, res) {
     // render the page and pass in any flash data if it exists
    res.render('register.ejs');
});

app.post('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
var name = req.body.username;
var pass = req.body.password;

db.all('SELECT * FROM users', function(err, rows){
  if(err){
    console.log(err);
  } else {
    console.log('********U TABLE**********');
    console.log(rows); 
    for(var i=0; i<rows.length; i++){
       if(rows[i].username==name && rows[i].password==pass){
        res.redirect('/home');
      }
     else if(rows[i].username==name && rows[i].password!=pass){
        console.log("Password is incorrect");
        //alert("Password is incorrect");
      }
    else{
      console.log("There is no user account under this name. Please register.");
    }
  }
  }
  console.log("POOP");
});

});

app.post('/register', function(req, res) {

var name = req.body.username;
var pass = req.body.password;

db.all('SELECT * FROM users', function(err, rows){
  if(err){
    console.log(err);
  } else {
    console.log('********U TABLE**********');
    console.log(rows); 
    for(var i=0; i<rows.length; i++){
       if(rows[i].username==name && rows[i].password==pass){
      console.log("You alrady have an account. Go to Login");
      }
    else{

  db.run("INSERT INTO users (username, password) VALUES (?, ?)",name,pass,
  function(err) {
    if (err) { throw err;}
  }
);
    console.log("work");

    }
  }
  }

});

});

app.get('/home', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('home.ejs');
});

app.post('/home', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.redirect('/list');
});

app.get('/user', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('user.ejs');
});

app.get('/list', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('list.ejs');
});
  

}