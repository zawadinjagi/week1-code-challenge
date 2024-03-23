function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
  
    if (speed > speedLimit) {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
    }
  
    return demeritPoints;
  }
  
  
  function handleFormSubmission() {
  
    const speedInput = document.getElementById("Vehicle-speed-detector");
    const speed = parseInt(speedInput.value);
    
    
    const demeritPoints = calculateDemeritPoints(speed);
    
    
    const demeritPointsElement = document.getElementById("demeritPoints");
    const commentElement = document.getElementById("comment");
    
    demeritPointsElement.innerText = "Demerit Points: " + demeritPoints;
    if (demeritPoints > 12) {
        commentElement.innerText = "License suspended";
    } else {
        commentElement.innerText = "";
    }
  }
  
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", handleFormSubmission);
  