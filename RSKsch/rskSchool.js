const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: 'root', 
  database: 'studentdtl1'  
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID', connection.threadId);
});


connection.query('SELECT * FROM studtl1', (err, rows) => {
  if (err) {
    console.error('Error querying MySQL database:', err.stack);
    return;
  }
  console.log('Data retrieved from MySQL database:', rows);
});

connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL connection:', err.stack);
    return;
  }
  console.log('MySQL connection closed');
});