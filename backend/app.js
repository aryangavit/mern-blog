require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 5000;

app.get('',(req,res)=>{
    res.send("Hello from port 500")
});

app.listen(PORT,()=>{
    console.log(`App listeneing on port ${PORT}`)
});