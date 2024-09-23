const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLenght:10,
        unique:true
    },
    userType:{
        type:String,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    }
},{timestamp:true,versionKey:false})


module.exports = mongoose.model("User",userSchema)