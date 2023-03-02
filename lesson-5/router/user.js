const express = require('express');
const {postUser,getUser,getUserId,deleteUser,Upadteuser} = require("../controlers/user")
const router = express.Router();

router.get('/', async(req,res)=>{
    let data = await getUser()
    res.send(data);
})
router.get('/:id',async(req,res)=>{

    let user = await  getUserId(req.params.id)
    if(user){
        res.send(user)
    }else{
        res.send("ene herelg baihgvi bna")
    }
})


router.post('/', async(req,res)=>{
    
    let data = await postUser(req.body);
    res.send('success');
})

router.delete('/:id',async(req,res)=>{
    let deletedData = await deleteUser(req.params.id);
    res.send(deletedData)
})
router.put('/:id',async(req,res)=>{
    let UpdatedData = await Upadteuser(req.params.id,req.body);
    res.send(UpdatedData)
})
module.exports = router;