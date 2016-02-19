module.exports = function(app, passport) {

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs');
});

app.get('/register', function(req, res) {
     // render the page and pass in any flash data if it exists
    res.render('register.ejs');
});

}

