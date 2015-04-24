$(document).ready(function (argument) {
	var n_place = $('.qty .value');
	$('.qty').on('click', '.add', function() {
	    var n = parseInt(n_place.text(), 10);
	    n_place.empty().append(n + 1);
	});
	$('.qty').on('click', '.sub', function() {
	    var n = parseInt(n_place.text(), 10);
	    if(n != 1){
	    	n_place.empty().append(Math.max(0, n - 1));	    	
	    }
	});
});