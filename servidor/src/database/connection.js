const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'registrohorario'
});

connection.connect((function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('db is connected');
    }
}));

module.exports = connection;