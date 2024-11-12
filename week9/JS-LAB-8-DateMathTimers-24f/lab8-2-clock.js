/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = goNow;

//create page load function
function goNow() {
	//create variables for required HTML elements

	
	//create time variable so all functions have access to it
	var startBtn = document.getElementById("btnStart");
	var stopBtn = document.getElementById("btnStop");
	var nowHours = document.getElementById("hoursOut");
	var nowMins = document.getElementById("minsOut");
	var nowSecs = document.getElementById("secsOut");
	var timeStarts;
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
   
	function time (){
		var dateVar = new Date();
		var Hours = dateVar.getHours();
		var Mins = dateVar.getMinutes();
		var Secs = dateVar.getSeconds();
		nowHours.innerHTML= Hours;
		nowMins.innerHTML=newTime(Mins);
		nowSecs.innerHTML=newTime(Secs);
	}
	
	//CREATE FUNCTION TO START THE CLOCK.
	function clockStart(){
		timeStarts=setInterval(time,1000);
		time();
   }

	
	//CREATE FUNCTION TO STOP THE CLOCK
	function clockStop(){
		clearInterval(timeStarts);
	
	}
	
	function newTime(times){
		if(times<10){
			return ":0"+times;
		}else{
			return ":"+times;
		}
		
	}
	
	
	// SET EVENT LISTENERS
	startBtn.onclick=clockStart;
	stopBtn.onclick=clockStop;
	time();
}