/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = dateViewer;
//create page load function
function dateViewer(){
	



	//create variables for required HTML elements
	var dateVar = new Date();
	var wfd= dateVar.getDay();
	var dd = dateVar.getDate();
	var mm = dateVar.getMonth();
	var yyyy = dateVar.getFullYear();
	const weekOfday = ["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"];
	const MonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
	var today = weekOfday[wfd]+" "+ MonthNames[mm]+" " +dd+" " +yyyy ;
	console.log(dateVar);


	//create variables for now date and due date

	var dueDay = new Date ("December 13, 2024 18:00:00");
	var dueDayDispay = dueDay.toDateString();

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	var todaynow = document.getElementById("todayData");
	todaynow.innerHTML = today;
	var finaldate = document.getElementById("finalData");
	finaldate.innerHTML = dueDayDispay;

	// var dueyear = dueDay.getTime();
	// var duemonth= dueDay.getMonth();
	// var dueDate = dueDay.getDate();
	// var dueWfd =dueDay.get
	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var todayTime = dateVar.getTime();
	var dueTime = dueDay.getTime();
	var timeDif = dueTime - todayTime;
	
	var days = document.getElementById("dueData");
	
	// CHECK IF DUE DATE HAS PASSED
    if (timeDif <= 0) {
		var passed = document.getElementById("countMsg");
		passed.innerHTML = "the due date has already passed!";
    } else {
        days.innerHTML = Math.floor(timeDif/86400000);

    }
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
		
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
}