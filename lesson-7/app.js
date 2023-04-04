const express = require('express');
const dotenv = require('dotenv');
const upload = require('express-fileupload');
const cors = require('cors')
var cookieParser = require('cookie-parser');
const connectionDB = require('./data')
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');




dotenv.config();
const app = express();
  
connectionDB();
//body-parser
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
      if (origin === undefined || whitelist.indexOf(origin) !== -1 ) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
   allowedHeader:"Set-cookie, Content-Type",
   methods:"GET, POST, PUT, DELETE",
   credentials:true
  }
app.use(cookieParser())

app.use(cors(corsOptions))
app.use(express.json());
app.use(upload());
app.use('/upload',express.static('upload'))



app.use('/user',userRouter);
app.use('/post',postRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server  listen ${process.env.PORT} port`)
})

