import mongoose from 'mongoose'
const dotenv = require('dotenv').config()
// Initialize connection to database
const dbUrl = process.env.ATLAS.URI,
      dbOptions = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions)
const db = mongoose.connection
db.once('open', ()=>{
    console.log("MongoDB database connection granted!");
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
export default db