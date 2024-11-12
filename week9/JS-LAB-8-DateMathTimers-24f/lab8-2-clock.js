/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = goNow;

//create page load function
function goNow() {
	//create variables for required HTML elements

	
	//create time variable so all functions have access to it
	var StartBtn = document.getElementById("btnStart");
	var StopBtn = document.getElementById("btnStop");
	var NowHours = document.getElementById("hoursOut");
	var NowMins = document.getElementById("minsOut");
	var NowSecs = document.getElementById("secsOut");
	var timeStarts;
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
   
	function time (){
		var dateVar = new Date();
		var Hours = dateVar.getHours();
		var Mins = dateVar.getMinutes();
		var Secs = dateVar.getSeconds();
		Hours.innerHTML=NowHours;
		newTime(Mins,NowMins);
		newTime(Secs,NowSecs);
	}
	
	//CREATE FUNCTION TO START THE CLOCK.
	function clockStart(){
		timeStarts=setInterval(time,1000);
		time();
   }

	
	//CREATE FUNCTION TO STOP THE CLOCK
	function clockStop(){
		clearInterval(timeStarts);
		return false;
	}
	function newTime(times,zero){
		if(times<10){
			zero.innerHTML= ":0"+times;
		}else{
			zero.innerHTML=":"+times;
		}
		
	}
	
	
	// SET EVENT LISTENERS
	StartBtn.onclick=clockStart;
	StopBtn.onclick=clockStop
	time();
}
