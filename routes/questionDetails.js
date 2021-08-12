const express = require('express')
const questionDetail = require('../models/questionDetail')
const router = express.Router()


router.get('/', async(req, res) => {
    try {
        const questionDetails = await questionDetail.find()
        res.json(questionDetails)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async(req, res) => {
    const questionDetail = new QuestionDetail({
        QuestionAttempted: req.body.QuestionAttempted,
        correctIncorrectStatus: req.body.correctIncorrectStatus,
        TimeTaken: req.body.TimeTaken,
        userId: req.body.userId,
        machineId: req.body.machineId,
        timeStamp: req.body.timeStamp
    })
    try {
        const newQuestionDetail = await questionDetail.save()
        res.status(201).json(newQuestionDetail)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
module.exports = router