const userSchema = require('../model/user');

async function getUser(){
    let data = await userSchema.find();
    return data
}

async function getUserId(arg){
    
    let data = await userSchema.findById(arg);
    return data
}


async function postUser(arg){
    console.log(arg)
    let user = await userSchema.create(arg)
}

async function deleteUser(arg){
    let deleteUser = await userSchema.findByIdAndDelete(arg);
    return deleteUser
}
async function Upadteuser(arg,arg1){
    let username = arg1.username
    let Upadteduser = await userSchema.findByIdAndUpdate(arg,arg1);
    return Upadteduser
}

module.exports ={
    postUser,
    getUser,
    getUserId,
    deleteUser,
    Upadteuser
}