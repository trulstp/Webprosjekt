const mongoose = require('mongoose')

const registerTemplate = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    surName:{
        type:String,
        required:true
    },
    studentID:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    degreeProgram:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('mytable', registerTemplate)