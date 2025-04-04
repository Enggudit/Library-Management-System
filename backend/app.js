const dotenv = require('dotenv');
const express= require('express');
const app= express();
const cors = require('cors');
dotenv.config();
const connectTodb = require('./db/db');
const userRoutes = require('./routes/users.routes');
const cookieParser = require('cookie-parser');

connectTodb();

app.use(cors());

app.get('/', (req,res) =>{
    res.send("Backend running successfully");
});

app.user('/user', userRoutes);

module.exports =app;