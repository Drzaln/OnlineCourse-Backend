require('dotenv').config()
const express = require('express')
const app = express()
const Cors = require('cors')
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const port = process.env.PORT | 5000
const bodyParser = require('body-parser')
// const book = require('./route/book')
// const borrow = require('./route/borrow')
const user = require('./src/routes/user')

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(express.static(__dirname + '/uploads'))
app.use(bodyParser.json())
const whitelist = process.env.WHITELIST
app.listen(port)

// var whitelist = ['https://localhost:5000', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(Cors())
app.options(Cors(corsOptions))
app.use(xssFilter())
console.log('Connect Succes On ' + port)
app.use(logger('dev'))

// Route to endpoint
// book(app)
// borrow(app)
user(app)
