const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const ConnectDB = require('./config/db')

const app = express()

ConnectDB();
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))

readdirSync('./routes').map((e) => {
    app.use('/api', require('./routes/' + e))
})

app.listen(5000, ()=>{
    console.log('Server is Running')
})