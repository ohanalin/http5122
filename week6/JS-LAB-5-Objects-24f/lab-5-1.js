//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
//

var meObject = {
    name : "Joyce Lin",
    occupation :"student",
    age:18,
    introduceMe: function () {
       outPut = "My Name is " + meObject.name + " and I am a "+ meObject.occupation;
       alert(outPut);
	}
}
meObject.introduceMe();