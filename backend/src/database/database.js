const mongoose = require("mongoose")
require("dotenv").config()
const dbPort = process.env.DB_URL

const connectDB = () =>{
    try {
        mongoose.connect(dbPort)
        console.log('DB is connect ')
    }catch (e){
        console.log(`DB is not connect `)
    }

}

module.exports = connectDB