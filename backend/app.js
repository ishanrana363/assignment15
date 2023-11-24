const express = require('express')
const app = express()
const route = require("./src/routes/api")
// Security Middleware Import

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require('cors');
const morgan = require("morgan")
const path = require("path");
const mongoose = require("mongoose");



// Security Middleware library Implement

app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const limit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes in milliseconds
    max: 3000
});


app.use(limit)

// Database Connection

app.use("/api/v1",route)


app.use("*",(req,res)=>{
    res.status(404).json({
        data : "Routes not found "
    })
})





module.exports = app