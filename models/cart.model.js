const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    productName:{
        type:String
    },
    addedAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true, versionKey:false})

module.exports = mongoose.model("Cart", CartSchema)