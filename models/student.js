const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    student_name: {
        type: String,
        required: true
    },
    student_id: {
        type: String,
        required: true
    },
    subject_1: {
        type: String,
        required: true
    },
    subject_2: {
        type: String,
        required: true
    },
    subject_3: {
        type: String,
        required: true
    },
    subject_4: {
        type: String,
        required: true
    },
    subject_5: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema)