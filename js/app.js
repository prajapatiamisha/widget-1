jQuery(document).ready(function() {
	var $nav = $('.widget-1 .content .nav');

	$.getJSON( "ajax/data.json", function( data ) {
		console.log(data);
		// var items = [];
		// $.each( data, function( key, val ) {
		// items.push( "<li id='" + key + "'>" + val + "</li>" );
		// });

		// $( "<ul/>", {
		// "class": "my-new-list",
		// html: items.join( "" )
		// }).appendTo( "body" );
	});
	

	
});
