//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
jQuery(window).on("load",function (){
	//ADD CLICK EVENT TO <h2>
	$('.contentBox').hide();
	// $('h2').on("click",function(){
	// 	$('.contentBox').fadeToggle("slow");
	// });

	$('h2').on("click",function(){
		$('.contentBox').hide(3000);
		$(this).next('.contentBox').slideToggle(3000);
	});
	
	// $('p').hover(
	// 	function(){$('p').css('background','red','color','white');},
	// 	function(){$('p').css('background','#524737')}
	// );
	

	$('p').hover(
		function(){$(this).toggleClass('textHovered');}
	);
	
	//CHANGE <p> BACKGROUND ON HOVER




});

