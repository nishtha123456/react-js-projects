var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "asha",
  password: "asha389"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});