const mysql = require('mysql2');

const co = mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs'
});
const err = co.connect ();
if (err) {
  console.log('Error connecting to the database:', err);
}   else { 
    console.log('Connected to the MySQL database.');
    }
module.exports = co;