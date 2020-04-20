const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'cabbage'
});

connection.connect();

let sql = 'call userRegister(@temp,\'cabbage03\',\'111111\',\'000000000000000005\',\'cabbage02\')';

connection.query(sql, function (err, rows, fields) {
    if (err) {
        console.log('select error -', err.message);
        return;
    }
    console.log('---------select------------');
    console.log(rows,fields);
    console.log('---------------------------');
});
connection.end();