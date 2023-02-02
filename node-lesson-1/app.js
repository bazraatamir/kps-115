const express = require('express');
const path = require("path")
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})
app.get('/express',(req,res)=>{
    res.send('thaks nodemon')
})

app.listen(3000);
