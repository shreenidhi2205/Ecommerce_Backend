const mongoose =require("mongoose")

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    category:{
        type :String,
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

module.exports=mongoose.model("product",productSchema)