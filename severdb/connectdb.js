const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'account'
});

connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối database: ' + err.stack);
        return;
    }

    console.log('Đã kết nối với cơ sở dữ liệu dưới dạng id ' + connection.threadId);
});

connection.query('SELECT * FROM LOGIN', (err, rows, fields) => {
    if (err) {
        console.error('Lỗi khi thực hiện truy vấn: ' + err.stack);
        return;
    }

    console.log('Kết quả truy vấn: ', rows);
});

connection.end();
