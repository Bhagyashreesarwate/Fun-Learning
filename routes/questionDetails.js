const express = require('express')
const router = express.Router()
const QuestionDetail = require('../models/questionDetail')


router.get('/', async(req, res) => {
    try {
        const questionDetails = await QuestionDetail.find()
        res.json(questionDetails)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async(req, res) => {
    console.log('got post request : ' + JSON.stringify(req.body))
    const questionDetail = new QuestionDetail({
        QuestionAttempted: req.body.QuestionAttempted,
        correctIncorrectStatus: req.body.correctIncorrectStatus,
        TimeTaken: req.body.TimeTaken,
        userId: req.body.userId,
        machineId: req.body.machineId,
        timeStamp: req.body.timeStamp
    })
    try {
        console.log('saving to mongodb')
        const newQuestionDetail = await questionDetail.save(function() {})
        console.log('saved to mongodb')
        res.status(201).json(newQuestionDetail)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
module.exports = router