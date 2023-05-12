const mysql = require('mysql');
const express = require("express");
const bodyParser = require('body-parser');

const app = express();


//Ket noi co so du lieu MySql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect();


//Su dung body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Lay du lieu tu bang "USERS"
app.get('/', (req, res) => {
    connection.query('SELECT * FROM USERS', (error,rows) => {
        if(error) {
            console.error(error.message);
            res.status(500).send('Internal sever error');
        }
        let lastTenElemnts = rows.slice(-3);
        res.send(lastTenElemnts);
    })
})

//Chay sever
app.listen(5050, () => {
    console.log('Server đang chạy trên PORT 5050');
})