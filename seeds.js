var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Congress-Stalker.db');

db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3

db.run("INSERT INTO users (Username, Password) VALUES (?,?), (?,?)",
  'Matt', 'swag',
  'Catherine', 'poopy',
  function(err) {
    if (err) { throw err;}
  }
);

/*db.run("INSERT INTO garages (owner) VALUES (?), (?)",
  'Mrs. Smith',
  'Mr. Wilson',
  function(err) {
    if (err) { throw err;}
  }
);

db.run("INSERT INTO garages (owner) VALUES (?), (?)",
  'Mrs. Smith',
  'Mr. Wilson',
  function(err) {
    if (err) { throw err;}
  }
);

db.run("INSERT INTO cars (garage_id, make, model, year) VALUES (?,?,?,?), (?,?,?,?), (?,?,?,?),(?,?,?,?)",
  1, 'Lamborghini', 'Countach', 1986,
  1, 'Citroen', 'SM', 1970,
  1, 'Mazda', 'Cosmo', 1970,
  1, 'Jaguar', 'E-Type', 1963,
  function(err) {
    if (err) { throw err;}
  }
);
*/