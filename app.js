const express = require('express')
const app = express()
const router = require('./routes/routes')

let PORT = 8080

app.use('/api',router)


app.listen(PORT,console.log('Listening at PORT 8080....'))