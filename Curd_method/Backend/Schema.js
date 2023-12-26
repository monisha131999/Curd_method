const mongoose=require('mongoose');
const dataschema=new mongoose.Schema({
    Firstname:{
        type:String,
        
    },
    Lastname:{
        type:String,
       
    },
    Email:{
        type:String,
    },
    Phone:{
        type:Number,
    }
    
    
})
module.exports =mongoose.model("formdatas",dataschema)