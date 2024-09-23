//POST localhost:8080/ecomm/api/product

//CRUD operations for products : Create , Read (view all) , Update , Delete
const productController = require("../controllers/product.controller")
const productMW = require("../middlewares/product.mw")

module.exports = (app)=>{

    //To create product
    app.post("/ecomm/api/product", productController.productList);

    //To view all products
    app.get("/ecomm/api/viewAll", productController.findAll);

    //To Update
    app.put("/ecomm/api/updateProduct", productController.update);

    //To delete product
    app.delete("/ecomm/api/deleteProduct",productController.delete);
 
}
