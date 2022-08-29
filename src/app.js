const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
require('dotenv-safe').config()

const db = require('./config/mysqlConfig');

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message)
    }
  
    console.log('Connected to the MySQL server.')
  })


const unitRoutes = require('./routes/unitRoutes')
const clientRoutes = require('./routes/clientRoutes')
const professionalRoutes = require('./routes/professionalRoutes')
const scheduleRoutes = require('./routes/scheduleRoutes')
const serviceRoutes = require('./routes/serviceRoutes')

app.use(express.json())

app.use('/unit', unitRoutes)
app.use('/client', clientRoutes)
app.use('/professional', professionalRoutes)
app.use('/schedule', scheduleRoutes)
app.use('/service', serviceRoutes)


module.exports = app