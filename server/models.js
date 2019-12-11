const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'movielist'
});

connection.connect();

connection.query('SELECT * from movies', function (error, results) {
 console.log("connected to the database");
 console.log(results);
});

module.exports ={

}
//connection.end();