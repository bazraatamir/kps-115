const express = require('express');

const userRouter = require('./routes/user')

const app = express();

let i = 0 ;

app.use(express.json())

app.use('/user',userRouter);



app.listen(3000,()=>{
    console.log(`server  listen 3000 port`)
})

