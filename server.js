//This will be the starting file of the Project

const express = require("express")
import mongoose from 'mongoose'
const app = express()
const server_config = require("./config/server.config")
const db_config = require("./config/db.config")
const user_model = require("./models/user.model")
const bcrypt = require("bcryptjs")
const product_model=require("./models/product.model")
const category_model = require("./models/category.model")
const cartModel = require("./models/cart.model")

app.use(express.json())  //This is Express Middleware



//Create an admin user at the starting of the application 
//if not already present


//Connection with mongoDB
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection

db.on("error" , ()=>{
    console.log("Error while connecting to Mongo Database")
})

db.once("open" , ()=>{
    console.log("Connected to MongoDB")
    
    init()
})

async function init(){
    try{
        let user = await user_model.findOne({userId : "Admin"})

        if(user){
            console.log("Admin is already present")
            return
        }

    }catch(err){
        console.log("Error while reading data",err)
    }
    
    try{
        user = await user_model.create({
            name : "Shreenidhi",
            userId : "Admin",
            email : "shreenidhi@gmail.com",
            userType : "ADMIN",
            password : bcrypt.hashSync("Welcome1" , 8)
        })
        console.log("Admin created", user )
        
    }catch(err){
        console.log("Error while creating admin",err)
    }
}

//Stich the route to the server
require("./routes/auth.routes")(app)
require("./routes/product.routes")(app)
require("./routes/category.routes")(app)
require("./routes/cart.routes")(app)



//Start the Server
app.listen(server_config.PORT, ()=>{
    console.log("Server started at port number : ", server_config.PORT)
})