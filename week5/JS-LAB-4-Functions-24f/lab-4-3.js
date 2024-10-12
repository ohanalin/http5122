//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will...
//It expects to receive...
//It will return...
function currentTemp(nowTemp){
   if(nowTemp>30 || nowTemp <-10 ){
    return false;
   }else{
    return true;
   }

}

var tempetureInput = prompt ("What is yout tempature right now?");
console.log(tempetureInput);



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
if (currentTemp(tempetureInput)=== false){
    alert("Yikes! Not weather for dog walking!");
}else{
    alert("You’re good, have a nice walk!");
}


