// declare and initialize 7 variables with 7 movie names
var movie1="The Godfather";
var movie2="The Dark Knight";
var movie3="Schindler's List";
var movie4="12 Angry Men";
var movie5="Pulp Fiction";
var movie6="Amelie";
var movie7="Brokeback Mountain";

//create a JavaScript array to hold these variables and represent your top 7 movie list
//var movieNames = [movie1, movie2, movie3, movie4, move5, movie6, movie7];
var userInput = prompt("Which top 7 movie would you like? Pick 1~7" );
var movieNames = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];


while(userInput>8){
  
    
    console.log(userInput);
    alert.prompt("Please enter a number between 1 and 7!");
}

var movieNumber = userInput-1; 
alert(movieNumber + movieNames[i] );

for(var i = 0; i < movieNames.length; i++)
    {
// The user will then see a pop-up that says, "Number num on the 
// list is " with  num being the movie’s position on the top 7, 
// followed by the movie title. 

    var number = i+1;
    console.log("Movie " + number + ": " +movieNames[i]);
}