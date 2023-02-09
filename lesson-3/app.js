const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs/promises');
const { json } = require('body-parser');
const userRouter = require('./rout/user')

dotenv.config({path:'./config/configenv.env'})
const app = express();
app.use(express.json());
// let students 


app.use('/user',userRouter)

// app.get('/',async(req,res)=>{
//     res.json(students)
// })

// app.get('/:id',(req,res)=>{
    
//     let student = students.filter((elements)=>{
//         return elements.id == req.params.id
//     })
//     res.send(student)
// })

// app.post('/',async(req,res)=>{
//    let student = req.body
//    students.push(student);
//    let test = await fs.writeFile('./student.json',JSON.stringify(students,null,2))
//    res.send("success")

// });


app.listen(process.env.PORT,async()=>{
    // let data = await fs.readFile("./student.json","utf-8");
    // students = JSON.parse(data);
   
    console.log(`server listen  ${process.env.PORT}`);

})