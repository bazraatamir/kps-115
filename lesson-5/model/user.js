const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    userName:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('user',userSchema);