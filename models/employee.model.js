const mongoose =require("mongoose")

const employeeSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    ContactNumber:{
        type :Number,
        required:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    }

},{timestamps:true,versionKey:false})

// productSchema.virtual("id").get(function(){
//     return this._id.toHexString;
// });

// productSchema.set("toJSON",{
//     virtuals:true
// })

module.exports=mongoose.model("employee",employeeSchema)