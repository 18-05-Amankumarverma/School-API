const { validationResult, check } = require('express-validator');
const { connection } = require('../db/db.config');

// schema to validate location parameter
const locationSchema = [
    check('latitude', "latitude cannot be empty!").trim().notEmpty().isFloat().withMessage("latitude must be a number"),
    check('longitude', "longitude cannot be empty!").trim().notEmpty().isFloat().withMessage("longitude must be a number")
];

const listSchool = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { latitude, longitude } = req.query;

    // HAVERSINE FORMULA FOR CALCULATING DISTANCE
    const query = `
        SELECT *, 
            (6371 * ACOS(
                COS(RADIANS(?)) * COS(RADIANS(latitude)) *
                COS(RADIANS(longitude) - RADIANS(?)) +
                SIN(RADIANS(?)) * SIN(RADIANS(latitude))
            )) AS distance
        FROM schoolInfo
        ORDER BY distance ASC
    `;

    try {
        connection.query(query, [latitude, longitude, latitude], (err, results, fields) => {
            if (err) {
                console.error("Query execution failed", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            return res.status(200).json({
                message: "Success",
                data: results
            });
        });
    } catch (err) {
        console.error("Unexpected error", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    listSchool,
    locationSchema
};
