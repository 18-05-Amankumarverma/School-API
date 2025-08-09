const express = require('express')
const router = express.Router()
const {addSchool,schoolSchema} = require('../controllers/addSchool.controller')
const {listSchool} = require('../controllers/listSchool.controller')
const {locationSchema} = require('../controllers/listSchool.controller')

router.post('/addSchool',schoolSchema,addSchool)
router.get('/listSchool',locationSchema,listSchool)


module.exports={
    router
}