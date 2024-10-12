// Declare and initialize 7 variables with 7 movie names
var movie1 = "The Godfather";
var movie2 = "The Dark Knight";
var movie3 = "Schindler's List";
var movie4 = "12 Angry Men";
var movie5 = "Pulp Fiction";
var movie6 = "Amelie";
var movie7 = "Brokeback Mountain";

// Create an array to hold these variables
var movieNames = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// Ask the user for a movie number
var num = prompt("Which top 7 movie would you like? Pick 1~7");

// Convert user input to a number
num = parseInt(num);

// Loop to ensure a valid number is entered
while (num < 1 || num > 7 || isNaN(num)) {
    alert("Please enter a number between 1 and 7!");
    userInput = prompt("Please enter a number between 1 and 7!");
}

// Calculate the movie index
var movieNumber = num - 1; 

// Show the movie the user picked
alert("Movie " + num + " on the list is: " + movieNames[movieNumber]);

// Log all movies in the console
for (var i = 0; i < movieNames.length; i++) {
    var number = i + 1;
    console.log("Movie " + number + ": " + movieNames[i]);
}