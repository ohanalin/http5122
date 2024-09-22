//######## LAB 2-3 EMAIL SIGNUP ########
alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userChoice;
var email;
var emailInput;

//==== LOGIC =============
userChoice  = confirm("would like to join your mailing list.");
if (userChoice === true) {
    emailInput = prompt("Your E-mail address?" ,"me@example.com");
    console.log(emailInput);

    if (emailInput === "" || emailInput === null || emailInput === "me@example.com") {
        alert("Thank you, but your email was not valid.");

    }
    
    else {
        alert("Login successful.");
    }
}

 else {
    alert("Thank you, we will not bother you again.")
}


