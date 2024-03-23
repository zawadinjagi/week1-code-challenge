const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", calculateGrade);

function calculateGrade() {
     // Get input values
    const JavaScript = parseFloat(document.getElementById("JavaScript").value);
    const CSS = parseFloat(document.getElementById("CSS").value);
    const HTML = parseFloat(document.getElementById("HTML").value);

     // Calculate average mark
    const averageMark = (JavaScript + CSS + HTML) / 3;

    let grade;
    if (averageMark >= 80) {
        grade = "A";
    } else if (averageMark >= 60) {
        grade = "B";
    } else if (averageMark >= 50) {
        grade = "C";
    } else if (averageMark >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
     // Display results
    document.getElementById("averageMark").innerText = "Average Mark: " + averageMark.toFixed(2);
    document.getElementById("grade").innerText = "Grade: " + grade;
}
