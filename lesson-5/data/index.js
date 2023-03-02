const mongoose = require('mongoose');

const connectDB = async()=>{
    let connection
    try{
        connection = await mongoose.connect("mongodb+srv://bazarragchaa:bazraa12@cluster0.gdwdrpv.mongodb.net/test",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    }
    catch(err){
        throw err;
    };

    return connection;
  
};

module.exports = connectDB