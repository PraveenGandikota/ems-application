import mysql from 'mysql2';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Creta143',
  database: 'EMS_DATABASE'
});

con.connect((err) => {
  if (err) {
    console.error('Connection Error:', err.message)
  } else {
    console.log("Connected to EMS_DATABASE");
  }
});

export default con;
