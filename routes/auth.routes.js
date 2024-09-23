//POST localhost:8080/ecomm/api/auth/signup

//I need to intercept this

const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth.mw")

module.exports = (app) =>{
    app.post("/ecomm/api/auth/signup" , [authMW.verifySignUpBody],authController.signup)

    /**
     * route for 
     * POST localhost:8080/ecomm/api/auth/signin
     */

    app.post("/ecomm/api/auth/signin", [authMW.verifySigninBody],authController.signin)
}

