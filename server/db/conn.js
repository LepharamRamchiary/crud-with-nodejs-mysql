import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const conn = mysql.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

export default conn;
