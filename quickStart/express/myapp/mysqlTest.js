const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'test'
});

connection.connect();

let sql = 'select * from users';

connection.query(sql, function (err, result) {
    if (err) {
        console.log('select error -', err.message);
        return;
    }
    console.log('---------select------------');
    console.log(result);
    console.log('---------------------------');
});
connection.end();