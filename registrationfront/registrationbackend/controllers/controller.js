const registerTemplateCopy = require('../models/RegistrationModels')



const getAllStudents = (request, response) =>{
    registerTemplateCopy.find()
        .then(studentList => response.json(studentList))
}

const registerStudent = (request, response) =>{
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
}

const deleteStudent = async (request, response) => {
    try{
        await registerTemplateCopy.remove({studentID:request.params.studentID})
    }catch(err){
        response.json({message:err})
    }
}
    
    module.exports = {
        getAllStudents,
        registerStudent,
        deleteStudent
    }