// I need to write the logic to register a user
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")
const user_model = require("../models/user.model")
const secret  = require("../config/auth.config")

exports.signup = async (req,res)=>{
    //Logic to create the user
    //1. Read the request body
    const request_body = req.body //gives request body in the form of JS object
    
    //2. Insert the data in the Users collection in MongoDB
    const userObj = {
        name : request_body.name,
        userId : request_body.userId,
        email : request_body.email,
        userType : request_body.userType,
        password : bcrypt.hashSync(request_body.password , 8)
    }

    try{
        const user_created = await user_model.create(userObj)
        //Return this user

        const res_obj = {
            name : user_created.name,
            userId : user_created.userId,
            email : user_created.email,
            userType : user_created.userType,
            createdAt : user_created.createdAt,
            updatedAt : user_created.updatedAt
        }
        res.status(201).send(res_obj) //201 is status code that indicates something is being succesfully created
    }catch(err){
        console.log("Error while registering the user")
        res.status(500).send({                  //500 is status code for internal server error
            message : "Some error occured while registering the user"
        })
    }
    //3. Return the response back to the user
    
}

exports.signin = async (req,res) =>{
    // check userId is present in system

    const user = await user_model.findOne({userId :req.body.userId })
     if(user == null){
     return   res.status(400).send({
            message: "User Id passed is not a valid user id"
        })
     }

    //password is correct

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
    if(!isPasswordValid){
       return res.status(401).send({
            message: "Wrong password passed"
        })
    }

    //using jwt we create the access token with the given TTL and return

    const token = jwt.sign({ id: user.userId},secret.secret,{

        expiresIn : 600
    })

    res.status(200).send ({
        name : user.name,
        userId : user.userId,
        email : user.email,
        userType: user.userType,
        accessToken : token
    })

}