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

// app.get('https://congress.api.sunlightfoundation.com/legislators/locate?zip=zip&apikey=7e9b73b47a324c499f9ac9c13bb9e624', function(data, status){
//             console.log("called");
//             zipInfo = data;
//             console.log(data);
            
//         });

app.get('/register', function(req, res) {
     // render the page and pass in any flash data if it exists
    res.render('register.ejs');
});

app.post('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
var name = req.body.username;
var pass = req.body.password;


});

app.post('/register', function(req, res) {

var name = req.body.username;
var pass = req.body.password;

});

app.get('/home', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('home.ejs');
});

// app.post('/home', function(req, res) {
//     zipcode = req.body;
//     console.log(zipcode);
//     // render the page and pass in any flash data if it exists
//     //res.redirect('/list');
// });
}
