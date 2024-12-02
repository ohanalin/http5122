//LAB 10 - 2 INVENTORY PAGE
jQuery(window).on("load",function (){
	
	

	
	
	
	$('.desc').hide();
	
	//CHANGE <p> BACKGROUND ON HOVER

	// $('tr').hover(
	// 	function(){$(this).addClass({'background':'red','color':'white'});},
	// 	function(){$(this).css({'background':'white','color':'black'})}
	// );

	 $('tr').hover(
		function(){$(this).toggleClass('selected');}
	 );

	$('tr').on("click",function(){
		$('.desc').hide();
		$(this).find('.desc').show();
	}

	);








	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>







	//ADD CLICK EVENT TO <tr>
});