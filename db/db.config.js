const mysql = require('mysql2')

// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database:process.env.DBNAME,
    password:process.env.PASSWORD
});

module.exports ={
    connection
}