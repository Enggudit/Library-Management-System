const dotenv = require('dotenv');
const express= require('express');
const app= express();
const cors = require('cors');
dotenv.config();
const connectTodb = require('./db/db');

connectTodb();

app.use(cors());

app.get('/', (req,res) =>{
    res.send("Backend running successfully");
});

module.exports =app;