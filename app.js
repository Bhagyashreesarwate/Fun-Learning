let express = require('Express')
let app = express();

app.use(express.static(__dirname + '/LearnArithmetic'))

app.get("/", function(req, res) {
    res.send('get is called')
})
app.listen(3000)