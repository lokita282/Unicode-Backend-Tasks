require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const characterRouter = require('./routes/characters')

mongoose.connect( process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

app.use('/characters', characterRouter)

app.listen(3000, () => console.log('server has started'))
