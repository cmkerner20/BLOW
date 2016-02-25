module.exports = function(app, passport) {

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs');
});

app.get('https://congress.api.sunlightfoundation.com/legislators/locate?zip=zip?apikey=[25d5c2f6794144a89172fb92c6ad847e]', function(data, status){
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

});

app.post('/register', function(req, res) {
     // render the page and pass in any flash data if it exists
    res.render('register.ejs');
});

}

