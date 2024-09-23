/**
 * POST localhost:8080/ecomm/api/categories
 */

const authMw = require("../middlewares/auth.mw")

category_controller = require("../controllers/category.controller")
auth_mw = require("../middlewares/auth.mw")

module.exports = (app)=>{
    app.post("/ecomm/api/categories",[auth_mw.verifyToken,authMw.isAdmin],category_controller.createNewCategory)
}