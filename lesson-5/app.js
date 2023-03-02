const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./router/user');
const connectDB = require('./data')

dotenv.config({path:'./config/envconfig.env'});
connectDB();
const app = express();
app.use(express.json());

app.use('/user',userRouter);


app.listen(process.env.PORT,()=>{
    console.log(`server listen ${process.env.PORT} port`)
})