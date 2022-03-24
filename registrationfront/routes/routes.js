const { response } = require('express')
const express = require('express')
const router = express.Router()
const registerTemplateCopy = require('../models/RegistrationModels')
const {getAllStudents, registerStudent, deleteStudent, updateStudents, findStudent} = require('../controllers/controller')

router.get('/students', getAllStudents)

router.post('/register', registerStudent)

router.delete('/:studentID', deleteStudent)

router.patch('/update/:studentID', updateStudents) 

router.get('/:studentID', findStudent)

module.exports = router