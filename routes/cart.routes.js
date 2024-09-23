const express = require("express")
const CartController = require("../controllers/cart.controller")

module.exports = (app) =>{
    //To add to cart
    app.post("/ecomm/api/addToCart",CartController.add);

    //To display Cart
    app.get("/ecomm/api/displayCart",CartController.displayCart)
}
