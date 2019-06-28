$(function(){

	// $('Document').ready(){
	// 	$('#diplomes').hide();
	// }

	$('#dip').on('click', function() {
    	$('#diplomes').toggle();
    });	

    $('#tech').on('click', function() {
    	$('#technologies').toggle();
    	 });	

    $('.moove').mouseover(function() {
  		$(this).animate({ "bottom": "+=15px" }, 300 );
 		$(this).animate({ "bottom": "-=15px" }, 200 );
 		$(this).animate({ "bottom": "+=8px" }, 90 );
 		$(this).animate({ "bottom": "-=8px" }, 90 );
 		$(this).animate({ "bottom": "+=2px" }, 80 );
 		$(this).animate({ "bottom": "-=2px" }, 80 );
	});


});