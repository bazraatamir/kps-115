const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type:String,
        required:[true,"хэрэглэгчийн нэрийг оруулна уу...."]
    }
})

module.exports = mongoose.model('user',userSchema);
//MVC