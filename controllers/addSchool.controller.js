const { validationResult, check } = require('express-validator')
const { connection } = require('../db/db.config')

// schema to validate school info
const schoolSchema = [
    check('schoolName', "school name can not be empty!").trim().notEmpty(),
    check('address', "address can not be empty!").trim().notEmpty(),
    check('latitude', "latitude can not be empty!").trim().notEmpty(),
    check('longitude', "longitude can not be empty!").trim().notEmpty(),

]

const addSchool = (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { schoolName, address, latitude, longitude } = req.body;
    
    try {
        connection.query(`INSERT INTO schoolInfo (schoolName, address, latitude, longitude) VALUES (?, ?, ?, ?)`,
            [schoolName, address, latitude, longitude], function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            return res.status(200).json({
                message: "School added successfully!",
                requestBody: req.body,
                databases: results
            });
        });


    } catch (err) {
        console.error("Query execution failed", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }


}

module.exports = {
    addSchool,
    schoolSchema
}