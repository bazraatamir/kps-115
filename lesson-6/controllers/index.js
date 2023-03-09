const userSchema = require('../model/user')

async function getUsers(req,res,next){
    let users = await userSchema.find()
    res.status(200).json({
        success:true,
        data:users
    })
};
async function createUser(req,res,next){
    try{
        let user = await userSchema.create(req.body)
        res.status(200).json({
            success:true,
            data:user
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
   
};
function editUser(req,res,next){
    res.status(200).json({
        success:true,
        data:' id-tai hereglechiin medeelel zasagdlaa'
    })
};
function deletedUser(req,res,next){
    res.status(200).json({
        success:true,
        data:' id -tai hereglech ustgagdlaa'
    })
};

module.exports = {
   getUsers,
   createUser,
   deletedUser,
   editUser
}
