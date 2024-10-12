//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.

function average ( number1 ,number2,number3,number4,number5){
    var caculation = ((number1 + number2 + number3 + number4 +number5)/5).toFixed(1);; 
    console.log(caculation);
}
average(5,10,15,20,25);

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

function scoreAverage(c1, c2, c3, c4, c5 ){
  
    var scoreCalculation = ((c1+ c2+ c3 + c4 +c5)/5).toFixed(1);
    return scoreCalculation;
    
}
console.log (scoreAverage());

var course1 = 80;
var course2 = 70;
var course3 = 80;
var course4 = 80;
var course5 = 80;

if(scoreAverage(course1, course2,course3,course4,course5) >70 ){
    alert ("you passed");
}else{
    alert ("keep going");
}


