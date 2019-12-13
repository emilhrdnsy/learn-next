const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000
const sipsRouters = express.Router()


let Sips = require('./sipsModel')


app.use(cors())
app.use(bodyParser.json())
app.use('/', sipsRouters)

mongoose.connect('mongodb://127.0.0.1:27017/SipsDB', { useNewUrlParser: true })
const connection = mongoose.connection

connection.once('open', function() {
  console.log('MongoDB connection successfully')
})

app.listen(PORT, function() {
  console.log('Server running on port '+PORT)
})

sipsRouters.route('/').post(function(req, res) {
  let mails = new Sips(req.body)
  mails.save()
    .then(todo => {
      res.status(200).json({'mail': 'mail added successfully'})
    })
    .catch(err => {
      res.status(400).send('failed adding mail')
    })
})
