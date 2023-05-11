const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

// Set up session middleware
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Create database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'account'
});

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log('Kết nối vào db');
});

// Define route for login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Define route for handling login
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check username and password against database
  const sql = `SELECT * FROM LOGIN WHERE email = '${email}' AND password = '${password}'`;
  connection.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      // Save user data in session
      req.session.user = result[0];
      res.redirect('/Login');
    } else {
      res.send('Sai email hoặc mật khẩu');
    }