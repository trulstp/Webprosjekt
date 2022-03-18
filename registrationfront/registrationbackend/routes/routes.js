const { response } = require('express')
const express = require('express')
const router = express.Router()
const registerTemplateCopy = require('../models/RegistrationModels')
const {getAllStudents, registerStudent} = require('../controllers/controller')

router.get('/students', getAllStudents)

router.post('/register', registerStudent)


module.exports = router