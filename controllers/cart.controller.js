const Cart = require("../models/cart.model")

//Add to Cart
exports.add = async(req,res)=>{
    try {
        const { userId,productName } = req.body
        const Item = new Cart({userId,productName})
        await Item.save()
    }catch(err){
        console.log("Error while creating the cart", err)
        return res.status(500).send({
            message : "Error while creating the cart"
        })
    }
}


//To display all products in a users cart
exports.displayCart = async(req,res)=>{
    try{
        const {userId} = req.params
        const Items = await Wishlist.find({ userId }).populate('productName')
        res.status(200).json({Items})
    }catch(err){
        console.log("Error while displaying the cart")
        return res.status(500).send({
            message:"Error while displaying cart"
        })
    }
}