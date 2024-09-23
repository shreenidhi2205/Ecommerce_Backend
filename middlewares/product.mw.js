//Create a Middleware that checks if the request body is proper and correct
const product_model = require("../models/product.model")
const verifyProductBody = async (req,res,next)=>{

    try{

        //Check for the productName
        if(!req.body.productName){
            return res.status(400).send({
                message : "Failed! Product name was not provided in the request body"
            })
        }

        //Check for the productPrice
        if(!req.body.productPrice){
            return res.status(400).send({
                message: "Failed! Product Price was not provided in request body"
            })
        }

        
    }catch(err){
        console.log("Error while validating the request object",err)
        res.status(500).send({
            message : "Error while validating the request body"
        })
    }
}


module.exports = {
    verifyProductBody : verifyProductBody
}