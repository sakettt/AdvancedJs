// 

export class Employee{

    constructor(empId,empName,empSalary,empDesign){
        this.empId=empId;
        this.empName=empName;
        this.empSalary=empSalary;
        this.empDesign=empDesign;
        
        getEmpId()
        {
            return this.empId;
        }

        setEmpId(id)
        {
            this.empId = id;
        }
    }
}

// es6 => convert (transpile ) => es5.0 
// traceur => google 
// babel => 








