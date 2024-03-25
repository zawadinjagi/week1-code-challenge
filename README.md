# TOY CODE CHALLENGE

## DESCRIPTION
The repository contains some projects:
-The Students Grade Calculator
-The Speed Detector
-The Net Salary Calculator

### GRADE CALCULATOR FOR STUDENTS
it calculates students grade between 0 and 100 the grade ranges are;
A=80-100
B=60-79
C=50-59
D=40-49
E=LESS 40

### guides
The program defines a function 'calculateGrade'that calculates the grade based on the input marks and specified grade ranges.
The 'main' function takes the input marks using 'prompt', calls 'calculateGrade', and displays the corresponding grade using 'console.log'.

### SPEED DETECTOR 
 It writes the program that takes speed of a car as input as follows:
 if the speed is less than 70 it should print "ok"
And for every 5km/s above the speed limit(70), it should give the driver demerit point and print the total number of demerit points and
If the demerit points exceed 12 it prints " Licence suspended.

### guides
 The program defines a function calculateDemeritPoints that calculates demerit points based on the input speed and a predefined speed limit.
 The main function takes the input speed, calls calculateDemeritPoints, and logs the appropriate message based on the demerit points.
 Example : If the speed is less than 70 km/h, it prints: "Ok".
 If the speed is greater than or equal to 70 km/h, it calculates and prints the demerit points. 
 If the demerit points exceed 12, it prints: "License suspended".

### NET SALARY CALCULATOR
Its major task is to calculate individual salary by inputing basic salary and benefits,
calculate payee,NHIF deductions,NSSF deductions,gross salary and net salary.

### guides
The program follows these steps to calculate the net salary:
Calculate Gross Salary: The gross salary is calculated by adding the basic salary and benefits.
Calculate Tax: Tax is calculated based on the tax rate and the gross salary.
Calculate NHIF Deductions: NHIF deductions are calculated based on the NHIF rate and the gross salary.
Calculate NSSF Deductions: NSSF deductions are calculated based on the NSSF rate and the gross salary.
Calculate Net Salary: The net salary is calculated by subtracting the total deductions (tax, NHIF, and NSSF) from the gross salary.
Usage To calculate the net salary for an individual:
Open the JavaScript file where the calculateNetSalary function is defined.
Call the calculateNetSalary function, passing the basic salary and benefits as arguments. For example:


