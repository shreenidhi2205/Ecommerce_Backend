

//CRUD operations for products : Create , Read (view all) , Update , Delete
const employeeController = require("../controllers/employee.controller")
const employeeMW = require("../middlewares/employee.mw")

module.exports = (app)=>{

    //To create product
    app.post("/employee", employeeController.employeeList);

    //To view all products
    app.get("/viewAll", employeeController.findAll);

    //To Update
    app.put("/update", employeeController.update);

    //To delete product
    app.delete("/delete",employeeController.delete);
 
}
