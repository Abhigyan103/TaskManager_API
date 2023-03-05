const mongoose = require('mongoose')
const connectDb = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true
    }).then(() => {
        console.log('Connection to the database is done')
    }).catch((err) => {
        console.log(`Error while connecting to the database - ${err}`);
    })
}

module.exports=connectDb