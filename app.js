require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/routes')
const connectDb=require('./db/connect')
PORT = 8080
connectDb(process.env.URI)
app.use(express.json())
app.use('/api',router)



app.listen(PORT,console.log('Listening at PORT 8080....'))