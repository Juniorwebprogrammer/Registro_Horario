const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

connection.connect((function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('db is connected');
    }
}));

module.exports = connection;