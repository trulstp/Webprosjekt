const { response } = require('express')
const express = require('express')
const router = express.Router()
const registerTemplateCopy = require('../models/RegistrationModels')

router.post('/register', (request, response) =>{
    const registeredUser = new registerTemplateCopy({
    firstName:request.body.firstName,
    surName:request.body.surName,
    studentID:request.body.studentID,
    age:request.body.age,
    nationality:request.body.nationality,
    degreeProgram:request.body.degreeProgram   
    })
    registeredUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router