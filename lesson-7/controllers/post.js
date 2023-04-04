const postSchema = require('../model/post');
const path = require('path');


exports.getPosts = async(req,res,next)=>{
    try{
        const data = await postSchema.find();
        res.status(200).json({
            success:false,
            data:data
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
}
exports.getPost = async(req,res,next)=>{
    try{
        const data = await postSchema.findById(req.params.id);
        res.status(200).json({
            success:false,
            data:data
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
}

exports.createPost = async(req,res,next)=>{
    try{
        const file = req.files.file;
        if(!file.mimetype.startsWith('image')){
           return res.status(400).json({
                success:false,
                error:"та зураг оруулна уу"
            })
        }
        if(file.size>100000){
           return res.status(400).json({
                success:false,
                error:"зургын хэтжээ хэтэрсэн байна"
            })
        }
        const filename = file.name
        file.mv(`./upload/${filename}`, err => {
            if (err) {
             return res.status(400).json({
                success:false,
                error:"зургыг хуулах явцад алдаа гарлаа"
             });
            }
        })
    const {title,description} = req.body
        let post = await postSchema.create({
            title,
            photo:filename,
            description,
        });
        res.status(200).json({
            success:true,
            data:post
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
};


