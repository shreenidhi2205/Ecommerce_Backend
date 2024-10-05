//Logic to add products
const employee = require("../models/employee.model")
exports.employeeList = async (req,res)=>{
    console.log("Received request to add employee:", req.body);
    //Logic to create the product
    //1. Read the request body
    const request_body = req.body //gives request body in the form of JS object
    
    //2. Insert the data in the Products collection in MongoDB
    const employeeObj = {
        Name : request_body.Name,
        Department : request_body.Department,
        ContactNumber : request_body.ContactNumber
    }

    try{
        const employee_created = await employee.create(employeeObj)
        //Return this product

        const res_obj = {
            Name : employee_created.Name,
            Department : employee_created.Department,
            ContactNumber : employee_created.ContactNumber,
            createdAt : employee_created.createdAt,
            updatedAt : employee_created.updatedAt
        }
        res.status(201).send(res_obj) //201 is status code that indicates something is being succesfully created
    }catch(err){
        console.log("Error while adding the employee",err)
        res.status(500).send({                  //500 is status code for internal server error
            message : "Some error occured while adding the employee"
        })
    }
    //3. Return the response back to the user
    
}



//To view all products
exports.findAll = async (req,res)=>{
    try{
        console.log("Attempting to fetch all employees");
        const allEmployees = await employee.find();
        console.log("Fetched employees:", allEmployees);
        res.status(200).json({allEmployees});
    }catch(err){
        console.error("Error while viewing all employees", err);
        return res.status(500).send({
            message: "Error while viewing all employees",
            error: err.message
        });
    }
}

//To update
exports.update = async(req,res)=>{
    try{
        const {Name} = req.params

        const updateEmployee = await employee.findOneAndUpdate(
            {Name:req.body.Name},
            {Department:req.body.Department}
        )
        res.status(200).send({
            message:"Employee details updated successfully"
        })
    }catch(err){
        console.log("Error while updating details",err)
        res.status(500).send({
            message:"Error while updating details"
        })
    }
}


//To delete
exports.delete = async (req, res) => {
    try {
        const { Name } = req.body;
        await employee.findOneAndDelete({ Name: Name });
        res.status(200).send({
            message: "Employee deleted successfully"
        });
    } catch (err) {
        console.log("Error while deleting Employee", err);
        res.status(500).send({
            message: "Error while deleting Employee"
        });
    }
}