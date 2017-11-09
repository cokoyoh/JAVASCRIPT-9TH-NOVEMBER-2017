console.log("This is a trial");

//Object defined here
var salary = {
    basic_salary : 20000,
    nhif : 234,
    nssf : 850,
    other_deduction: 0,
    netSalary : function () {
        return this.basic_salary - (this.nssf + this.nhif + this.other_deduction)
    },
    displayNetSalary : function () {
        console.log("Your net salary = KSh " + this.netSalary())
    }
}

console.log(salary.displayNetSalary());