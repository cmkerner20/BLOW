module.exports = function(app) {
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('cs.db');
var fs = require('fs');

app.get('/', function(req, res){
  res.render('index.ejs');
});

// app.get('/login', function(req, res) {
//     // render the page and pass in any flash data if it exists
//     res.render('login.ejs');
// });

// // app.get('https://congress.api.sunlightfoundation.com/legislators/locate?zip=zip&apikey=7e9b73b47a324c499f9ac9c13bb9e624', function(data, status){
// //             console.log("called");
// //             zipInfo = data;
// //             console.log(data);
            
// //         });

// app.get('/register', function(req, res) {
//      // render the page and pass in any flash data if it exists
//     res.render('register.ejs');
// });

// app.post('/login', function(req, res) {
//     // render the page and pass in any flash data if it exists
// var name = req.body.username;
// var pass = req.body.password;


// });

// app.post('/register', function(req, res) {

// var name = req.body.username;
// var pass = req.body.password;

// });

app.get('/home', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('home.ejs');
});

app.post('/turbines', function (req, res) {
    var data = JSON.stringify(req.body);
    console.log(JSON.parse(data)[0].name); 
    var old = fs.readFileSync("data/turbines.json", 'utf8');
    console.log(old);
    var newDoc = '{"id": "'+(((JSON.parse(old)).length)+1)+'","title": "'+JSON.parse(data)[0].name+'", "description": "'+JSON.parse(data)[0].description+'","status": "inactive"}';
    var cropped = old.substring(0, old.length-1);
    cropped+= ",";
    //fs.writeFile("data/quiz.json", cropped);
    var total = cropped+newDoc;
    total= total+ "]";
    console.log(total);
    fs.writeFile("data/turbines.json", total);
    res.send("done");
});

app.get('/turbines', function(req, res) {
    // render the page and pass in any flash data if it exists
    // var content = JSON.parse(fs.readFileSync("data/turbines.json", 'utf8'));
    var content = fs.readFileSync("data/turbines.json", 'utf8');
    res.send(content);

});

// app.post('/home', function(req, res) {
//     zipcode = req.body;
//     console.log(zipcode);
//     // render the page and pass in any flash data if it exists
//     //res.redirect('/list');
// });
}
