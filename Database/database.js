var mysql = require('mysql');

var connection = mysql.createConnection({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',

    password: '',
    database: '',

    debug: false,
    multipleStatements: true
});
connection.connect();

module.exports.connection = connection;