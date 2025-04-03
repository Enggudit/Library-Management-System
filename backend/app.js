const express= require('express');
const app= express();


app.get('/', (req,res) =>{
    res.send("Backend runn success fully");
});

module.exports =app;