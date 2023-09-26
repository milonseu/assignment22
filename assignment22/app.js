const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const multer = require('multer');
const mongoose = require('mongoose');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');

const connectDb = require('./config/db');

//Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const router = require('./src/Routes/api');

//configure env
dotenv.config({path:'./config.env'});

//database config
connectDb();
const app = new express();


app.use(bodyParser.json());
app.use(cookieParser());
//Security Middleware Implement
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());

//Request Rate Limiting
const limiter = rateLimit({
    windowMs:15 * 60 * 1000,// 15 minutes
    max: 100 // limit each ip to 100 request per windowMs
});
app.use(limiter);

//MongoDB Database Connection

app.get('/',(req,res)=>{
    res.send({message:"Welcome to assignment module 22 app"});
})

//Routing Implement
app.use("/api/v1",router)

//Undefined route
app.use('*',(req, res)=> {
    res.status(404).json({status:"fail",data:"Not Found."})
})

module.exports=app;