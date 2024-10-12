//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY

var ourTeam = ['John', 'Melody', 'Judy', 'Kim' ,'Jojo'];
//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);
//REMOVE LAST MEMBER
ourTeam.pop();
console.log(ourTeam);
//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift('Sean');
console.log(ourTeam);

//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();
console.log(ourTeam);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE

console.log("We have number of people "+ ourTeam.length);

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE


for(var i = 0; i < ourTeam.length; i++)
{
var number = i+1; 
console.log( "#" + number +" "+ ourTeam[i]);
}
