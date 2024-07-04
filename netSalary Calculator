function calculateNetSalary(basicSalary, benefits) {

    let grossSalary = basicSalary + benefits; //Total gross salary
    //PAYE Deductions
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 28000) {
        payee = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 47000) {
        payee = 3400 + (grossSalary - 28000) * 0.30;
    } else if (grossSalary <= 74000) {
        payee = 9100 + (grossSalary - 47000) * 0.33;
    } else {
        payee = 17020 + (grossSalary - 74001) * 0.3;
    }

    //NHIF deductions
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    //Nssf deductions.
    let nssf = grossSalary * 0.06; 

    let netSalary = grossSalary - payee - nhif - nssf; //To get the net salary

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

let basicSalary = 0 
let benefits = 0; 
let salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhif);
console.log("NSSF Deductions:", salaryDetails.nssf);
console.log("Net Salary:", salaryDetails.netSalary);