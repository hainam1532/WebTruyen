const express = require("express");
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  resave: true,
  saveUninitialized: true
}));

// Kết nối tới cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nam2!MMy1A1ne1zY',
  database: 'test'
});

connection.connect();

// Đăng nhập
app.post('/login', (req, res) => {
  const { email } = req.body;

  // Truy vấn cơ sở dữ liệu để tìm kiếm tài khoản người dùng với email tương ứng
  connection.query('SELECT * FROM USERS WHERE email = ?', [email], (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        message: 'Lỗi máy chủ'
      });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({
        message: 'Sai email hoặc password'
      });
      return;
    }

    const user = results[0];

    // So sánh mật khẩu được nhập vào với mật khẩu trong cơ sở dữ liệu
    bcrypt.compare(password, user.password, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({
          message: 'Lỗi máy chủ'
        });
        return;
      }

      if (!result) {
        res.status(401).json({
          message: 'Sai email hoặc password'
        });
        return;
      }

      // Lưu thông tin phiên đăng nhập
      req.session.userId = user.id;

      res.json({
        message: 'Đăng nhập thành công'
      });
    });
  });
});

// Xác thực tài nguyên bảo mật
app.get('/index.html', (req, res) => {
  if (!req.session.userId) {
    res.status(401).json({
      message: 'Không cho phép'
    });
    return;
  }

  res.json({
    message: 'An toàn'
  });
});

app.listen(9000, () => {
  console.log('Sever đang chạy trên port: 9000');
});
