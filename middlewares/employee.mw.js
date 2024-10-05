//Create a Middleware that checks if the request body is proper and correct
const employee_model = require("../models/employee.model")
const verifyEmployeeBody = async (req,res,next)=>{

    try{

        //Check for the productName
        if(!req.body.Name){
            return res.status(400).send({
                message : "Failed! Employee Name was not provided in the request body"
            })
        }

        //Check for the productPrice
        if(!req.body.Department){
            return res.status(400).send({
                message: "Failed! Department was not provided in request body"
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
    verifyEmployeeBody : verifyEmployeeBody
}