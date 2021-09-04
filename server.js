const express = require('Express')
const app = express();
const mongoose = require('mongoose')
const port = 3000

mongoose.connect('mongodb://localhost/questionDetails', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.static(__dirname + '/LearnArithmetic'))
app.use(express.json())

const questionDetailsRouter = require('./routes/questionDetails')
app.use('/questionDetails', questionDetailsRouter)

app.listen(port, () => {
    console.log('server started on port 3000')
})