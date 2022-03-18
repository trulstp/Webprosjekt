const { response } = require('express')
const express = require('express')
const router = express.Router()
const registerTemplateCopy = require('../models/RegistrationModels')
const {getAllStudents, registerStudent, deleteStudent} = require('../controllers/controller')

router.get('/students', getAllStudents)

router.post('/register', registerStudent)

router.delete('/:studentID', deleteStudent)

module.exports = router