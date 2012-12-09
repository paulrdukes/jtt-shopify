$(document).ready(function(){
	var $window = $(window);

	function checkWidth(){
		var curWidth = $window.width();

		if(curWidth < 400 ){
			$('aside').addClass('hidden');
		} else {
			$('aside').removeClass('hidden');
		}

	}
	checkWidth();
	$(window).resize(checkWidth);
});