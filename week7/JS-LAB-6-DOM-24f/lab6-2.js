//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC


//GET DOM ELEMENTS WE'LL NEED
function pageReady() {
var box = document.getElementById ("buttonBox");
var mysterbox = document.getElementById("mysteryBox");

	
	function showBox() {
		var answer = window.confirm("Do you want to see something?");
		if (answer){
			
			box.style.display= "block";
			mysterbox.style.display="none";	
		}
	

	}
	function buttonCLick(){
	
		box.style.background ="orange";
		box.style.width="600px";
		box.innerHTML ="<h2>SURPRISE!</h2>";
	


	}
	box.onclick= buttonCLick;
	mysterbox.onmousemove = showBox;
}
//====CREATE THE FUNCTIONS WE'LL NEED====
//FUNCTION TO ASK USER


//FUNCTION TO CHANGE buttonBox


//SETUP LISTENERS


//END onload FUNCTION