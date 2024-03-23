function calculatePayee(grossSalary) {
    // calculating paye
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = 0.1 * grossSalary;
    } else if (grossSalary <= 32333) {
        payee = 2400 + 0.25 * (grossSalary - 24000);
    } else if (grossSalary <= 40667) {
        payee = 5967.50 + 0.3 * (grossSalary - 32333);
    } else if (grossSalary <= 49000) {
        payee = 10960 + 0.32 * (grossSalary - 40667);
    } else if (grossSalary <= 57333) {
        payee = 16862.50 + 0.34 * (grossSalary - 49000);
    } else if (grossSalary <= 65667) {
        payee = 23575 + 0.36 * (grossSalary - 57333);
    } else if (grossSalary <= 74000) {
        payee = 31142 + 0.37 * (grossSalary - 65667);
    } else {
        payee = 39675 + 0.4 * (grossSalary - 74000);
    }
    return payee;
  }
  // calculating NHIF rates
  function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 7999) {
        nhif = 300;
    } else if (basicSalary <= 11999) {
        nhif = 400;
    } else if (basicSalary <= 14999) {
        nhif = 500;
    } else if (basicSalary <= 19999) {
        nhif = 600;
    } else if (basicSalary <= 24999) {
        nhif = 750;
    } else if (basicSalary <= 29999) {
        nhif = 850;
    } else if (basicSalary <= 34999) {
        nhif = 900;
    } else if (basicSalary <= 39999) {
        nhif = 950;
    } else if (basicSalary <= 44999) {
        nhif = 1000;
    } else if (basicSalary <= 49999) {
        nhif = 1100;
    } else if (basicSalary <= 59999) {
        nhif = 1200;
    } else if (basicSalary <= 69999) {
        nhif = 1300;
    } else if (basicSalary <= 79999) {
        nhif = 1400;
    } else {
        nhif = 1500;
    }
    return nhif;
  }
  // calculating NSSF rates
  function calculateNSSF(basicSalary) {
    return Math.min(0.06 * basicSalary, 6000);
  }
  // calculating the net salary

  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const netSalary = grossSalary - payee - nhif - nssf;
    return netSalary;
  }
  // displaying the net salary
  function calculateAndDisplayNetSalary() {
    const basicSalary = parseFloat(document.querySelector("#basic-salary").value);
    const benefits = parseFloat(document.querySelector("#benefits").value);
    const netSalary = calculateNetSalary(basicSalary, benefits);
    
    const resultDiv = document.querySelector(".result h1");
    resultDiv.textContent = "Net Salary: " + netSalary.toFixed(2);
  }
  