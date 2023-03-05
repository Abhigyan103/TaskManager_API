const express = require('express')
const app = express()

let PORT = 8080

app.get('/',(req,res)=> {
    res.status(200).json({msg: 'Connected'})
})



app.listen(PORT,console.log('Listening at PORT 8080....'))