const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3001
const {connection} = require('./db/db.config')
const {router} = require('./router/school.route')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

// // database connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as ID ' + connection.threadId);
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1',router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, (req, res) => {
    console.log(`your app listening on PORT http://localhost:${PORT}/api/v1`)
})
