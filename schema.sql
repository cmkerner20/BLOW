DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS bills;
DROP TABLE IF EXISTS legislators;
DROP TABLE IF EXISTS user_legislators;
DROP TABLE IF EXISTS user_bills;




CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 
);

CREATE TABLE bills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  legislator TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE legislators (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  twitter TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE user_bills (
  id_bill INTEGER,
  id_user INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY(id_bill) REFERENCES bills(id),
  FOREIGN KEY(id_user) REFERENCES users(id)
);


CREATE TABLE user_legislators (
  id_legislator INTEGER,
  id_user INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY(id_legislator) REFERENCES legislators(id),
  FOREIGN KEY(id_user) REFERENCES users(id)
);