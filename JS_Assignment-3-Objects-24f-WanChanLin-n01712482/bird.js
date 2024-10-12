var bird = {
    name: "pikachu",
    colour: "yellow",
    age: 13,
    species: "parrot",
    birdInfo: function () {
        var output = " your parrot " + this.name + " has " + this.colour + " feather who is " + this.age;
        return output;
    }
};

// First console log shows initial values
// 6. Now that you have created your object, output your object to the console.
console.log(bird);
alert(bird.birdInfo());
// 7. Send a popup to the user asking for input, then update one of the object properties with the new value from the user.
var nameInput = prompt("What is your bird's new name?", "Matcha");
bird.name = nameInput;
// 8: Send a second popup to update the color property

var colorInput = prompt("What is your bird's new color?", "green");
bird.colour = colorInput;
//9. Next, call the method of your custom object to update a 3rd object property.
var ageInput = prompt("What is your bird's age?", 3);
bird.age = ageInput;

alert(bird.birdInfo());

// // 10. Finally, output your object to the console. We should see the object with updated values.

console.log(bird);

