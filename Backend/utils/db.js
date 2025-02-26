// import mysql from 'mysql2';

// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '@Creta143',
//   database: 'EMS_DATABASE'
// });

// con.connect((err) => {
//   if (err) {
//     console.error('Connection Error:', err.message)
//   } else {
//     console.log("Connected to EMS_DATABASE");
//   }
// });

// export default con;


import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

con.connect((err) => {
  if (err) {
    console.error('Connection Error:', err.message);
  } else {
    console.log("Connected to Clever Cloud MySQL Database");
  }
});  

export default con;
