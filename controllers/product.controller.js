//Logic to add products
const product = require("../models/product.model")
exports.productList = async (req,res)=>{
    //Logic to create the product
    //1. Read the request body
    const request_body = req.body //gives request body in the form of JS object
    
    //2. Insert the data in the Products collection in MongoDB
    const productObj = {
        productName : request_body.productName,
        productPrice : request_body.productPrice,
        category : request_body.category
    }

    try{
        const product_created = await product.create(productObj)
        //Return this product

        const res_obj = {
            productName : product_created.productName,
            productPrice : product_created.productPrice,
            category : product_created.category,
            createdAt : product_created.createdAt,
            updatedAt : product_created.updatedAt
        }
        res.status(201).send(res_obj) //201 is status code that indicates something is being succesfully created
    }catch(err){
        console.log("Error while adding the product",err)
        res.status(500).send({                  //500 is status code for internal server error
            message : "Some error occured while adding the product"
        })
    }
    //3. Return the response back to the user
    
}



//To view all products
exports.findAll = async (req,res)=>{
    try{
        const allProducts = await product.find()
        res.status(200).json({allProducts})
    }catch(err){
        console.log("Error while viewing all items",err)
        return res.status(500).send({
            message:"Error while viewing all items"
        })
    }
}


//To update
exports.update = async(req,res)=>{
    try{
        const {productName} = req.params

        const updateProduct = await product.findOneAndUpdate(
            {productName:req.body.productName},
            {productPrice:req.body.productPrice}
        )
        res.status(200).send({
            message:"Product updated successfully"
        })
    }catch(err){
        console.log("Error while updating product",err)
        res.status(500).send({
            message:"Error while updating product"
        })
    }
}


//To delete
exports.delete = async (req,res)=>{
    try{
        const {productName} = req.params

        await product.findOneAndDelete({productName:productName})

        res.status(200).send({
            message:"Product deleted successfully"
        })
    }catch(err){
        console.log("Error while deleting Product",err)
        res.status(500).send({
            message:"Error while deleting Product"
        })
    }
}