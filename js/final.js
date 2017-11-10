// Whole-script strict mode syntax enabled here
'use strict';

//Object defined here
var Salary = {
    basic_salary : 20000,
    nhif : 234,
    nssf : 850,
    other_deduction: 0,

    /*
    this is a JavaScript function/ method created on the prototype method,
    this means that the methods are defined in the object literal hence can be accessed
    by all instances of the Salary object
     */
    netSalary : function () {
        return this.basic_salary - (this.nssf + this.nhif + this.other_deduction)
    },

    //this is a function too
    displayNetSalary : function () {
        console.log("Your net salary = KSh " + this.netSalary())
    }
}

Salary.basic_salary = document.getElementById("basic-salary").value
Salary.nssf = document.getElementById("nssf").value
Salary.nhif = document.getElementById("nhif").value
Salary.other_deduction = document.getElementById("other-deduction").value

function onCalculateSubmit () {
    alert(Salary.displayNetSalary())
}
