var number = 2; // choose number between 1-6
var numberInput;
var names;
var nameInput;
// Prompts the user to input their team number.
numberInput = prompt("which team number they belong to");
//users to input their team number.
console.log(numberInput);

//If the number does not match the expected value, access is denied.
if(numberInput != number){
    alert("you are denied access.");
    }
else{
//If the number matches, the user is prompted to enter their first name.
    nameInput = prompt (" what is your first name");
    console.log(nameInput);
//the list team members with their name    
    switch(String(nameInput)) {
     
        case nameInput = "Gabrielle":  
            alert( "Welcomes Team " + numberInput+" "+nameInput+"  Catalan" );
          break;
         
        case nameInput ="Jishan": 
            alert( "Welcomes Team " + numberInput+" "+nameInput +" Saha" );
          break;
        
        case nameInput ="Jerad":
            alert( "Welcomes Team " + numberInput+" "+nameInput+" Beauregard" );
          break;
     
        case nameInput ="Nitish":
            alert( "Welcomes Team " + numberInput+" "+nameInput+" Sharma" );
          break;
          
//If the name does not match the expected value, access is denied.

        default:
          alert("Access denied!");
      }
    
}

