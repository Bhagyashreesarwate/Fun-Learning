const { json } = require('express')
const mongoose = require('mongoose')

const questionDetailSchema = new mongoose.Schema({
    QuestionAttempted: {
        type: String,
        required: true
    },
    correctIncorrectStatus: {
        type: Boolean,
        required: true
    },
    TimeTaken: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    machineId: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('questionDetail', questionDetailSchema)