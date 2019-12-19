require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const dummyDataRouter = require('./routes/dummyDatas')
//app.use('/dummyDatas/barChart', dummyDataRouter)
app.use('/dummyDatas', dummyDataRouter)

app.listen(6969, () => console.log('server started'))

