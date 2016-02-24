var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('cs.db');

db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3

db.run("INSERT INTO users (id, username, password) VALUES (?, ?, ?)",
  1, 'Mrs. Smith', 'pword',
  function(err) {
    if (err) { throw err;}
  }
);

db.run("INSERT INTO bills (id, name) VALUES (?, ?)",
  1, 'thebill',
  function(err) {
    if (err) { throw err;}
  }
);

db.run("INSERT INTO legislators (id, name, twitter) VALUES (?, ?, ?)",
  1, 'Leg Smith', 'twit',
  function(err) {
    if (err) { throw err;}
  }
);

db.run("INSERT INTO user_bills (id_user, id_bill) VALUES (?, ?)",
  1, 1,
  function(err) {
    if (err) { throw err;}
  }
);

db.run("INSERT INTO user_legislators (id_user, id_legislator) VALUES (?, ?)",
  1, 1,
  function(err) {
    if (err) { throw err;}
  }
);