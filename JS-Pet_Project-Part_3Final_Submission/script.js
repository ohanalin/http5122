document.addEventListener("DOMContentLoaded", () => {
    const formInputs = document.querySelectorAll(".formstyle .letter");
    const submitButton = document.querySelector(".submitbtn");
    const errorDiv = document.getElementById("error");
    const resultDiv = document.getElementById("resultDiv");
    const backButton = document.getElementById("backBtn");
    const form = document.getElementById("question");
  
    // Enable the button if all inputs are filled
    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        const allFilled = Array.from(formInputs).every((input) => input.value.trim() !== "");
        submitButton.disabled = !allFilled;
        
      });
    });
  
    // Show result and hide form
    submitButton.addEventListener("click", () => {
      const mbti = Array.from(formInputs)
        .map((input) => input.value.trim().toUpperCase())
        .join("");
  
      if (mbti.length === 4) {
        // Hide the form and show the result
        form.style.display = "none";
        resultDiv.style.display = "block";
  
        const soapResult = document.getElementById(mbti);
        if (soapResult) {
          soapResult.style.display = "flex";
        } else {
        //   alert("Invalid MBTI type entered.");
        errorDiv.style.display = "block";
        }
      } else {
        errorDiv.style.display = "block";
      }
    });
  
    // Back button functionality
    backButton.addEventListener("click", () => {
      // Reset the form
      formInputs.forEach((input) => {
        input.value = "";
      });
      submitButton.disabled = true;
      errorDiv.style.display = "none";
  
      // Hide result and show form
      resultDiv.style.display = "none";
      form.style.display = "block";
  
      // Hide all soap results
      document.querySelectorAll(".soap-result").forEach((result) => {
        result.style.display = "none";
      });
    });
  });
  